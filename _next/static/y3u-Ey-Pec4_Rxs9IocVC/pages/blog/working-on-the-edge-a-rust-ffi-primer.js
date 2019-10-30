(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{D14E:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/working-on-the-edge-a-rust-ffi-primer",function(){return n("eaeZ")}])},eaeZ:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),i=n("2qpg"),s=n("8Kt/"),r=n.n(s),d=a.a.createElement;t.default=function(e){var t={ctime:"2019-10-18T09:52:11.506Z",mtime:"2019-10-18T09:52:11.506Z"},n=(t.title?t.title+" | ":"")+"Seb Renauld: The Blog";return d(i.a,null,d(r.a,null,d("title",{key:"title"},n),d("meta",{name:"description",content:t.description||""}),d("meta",{key:"og:type",name:"og:type",content:"article"}),d("meta",{key:"og:title",name:"og:title",content:n}),d("meta",{key:"og:description",name:"og:description",content:t.description||""}),t.image&&d("meta",{key:"og:image",name:"og:image",content:t.image}),t.url&&d("meta",{key:"og:url",name:"og:url",content:t.url}),d("meta",{key:"article:published_time",name:"article:published_time",content:t.ctime}),d("meta",{key:"article:modified_time",name:"article:modified_time",content:t.mtime})),d("div",null,d("div",{class:"blog-article",dangerouslySetInnerHTML:{__html:'<h3 id="workingontheedgeffiandrust">Working on the Edge: FFI and Rust</h3>\n<p>Following a rise in questions related to FFI to and from Rust on StackOverflow, I decided to attempt to write a primer aimed \nat trying to demystify some of the teething problems commonly encountered when stepping between languages. This will end up being \nrelatively technical and will assume some basic knowledge of hardware-specific details, particularly data and memory synchronization.</p>\n<h4 id="whatisffi">What is FFI?</h4>\n<p><a href="https://doc.rust-lang.org/nomicon/ffi.html">Foreign Function Interfacee</a> is a mechanism present in Rust (and many other languages!) that \nallows the user to execute code originally written using another language. This typically uses the C ABI as a base standard.</p>\n<p>This allows you to do some pretty nifty stuff, like being able to leverage the wide ecosystem of libraries present out there; anything that \nexports a shared object is potentially usable by leveraging FFI. This, in turn, is a panacea for embedded software development and iteratively \nbeing able to convert a codebase from C to Rust (or vice versa), or even simply to leverage each environment\'s strengths.</p>\n<p>The aim of these articles will be to highlight the basics (and caveats), some common interop tricks for frequent FFI boundaries, and provide \na reason as to the <em>why</em></p>\n<h4 id="thecabiaprimer">The C ABI: A primer</h4>\n<p>Before delving into FFI in Rust per se, we need to know how it works, in order to be able to establish its limitations. Rust, by default, comes \nwith a wide array of calling conventions supported by the <code>extern</code> block: <code>C</code>/<code>cdecl</code> for *nix, <code>stdcall</code>, <code>system</code> and <code>win64</code> for Windows. \nIn this primer, we\'ll focus on the <code>C</code> calling convention (the so-called <code>C ABI</code>), as this is most likely what you will encounter the most. Below \nthe hood, this will result in different opcode based on what target you are compiling for; after all, I did call it "so-called" because it is not \none ABI, but many variants of an ABI based on the architecture you\'re running on (or compiling for). This is largely hidden to you as an \nimplementation detail and handled by whichever compiler you are using below the hood.</p>\n<p>There is one more thing we need to care about when it comes to a broad overview: everything <strong>needs</strong> to respect the memory alignment of whatever \narchitecture you\'re targetting. If an <code>unsigned char</code> is 8bit-aligned, for example, this means that the minimum memory unit you will be able to get \nby allocating is 8bit. This leads to even crazier stuff when you consider structures, as <em>they</em> also have their own data alignment conventions, as \nillustrated by the following snippet:</p>\n<pre><code>    #[repr(C)]\n    struct TwoBools {\n        pub a: bool,\n        pub b: bool\n    }\n\n    #[no_mangle]\n    extern "C" fn take_bools(input: TwoBools, input2: TwoBools) {\n\n        println!("Passed memory addresses: {:?} {:?}", &amp;input as *const _, &amp;input2 as *const _);\n        println!("Struct 1 bools: {:?} {:?}", &amp;input.a as *const _, &amp;input.b as *const _);\n        println!("Struct 2 bools: {:?} {:?}", &amp;input2.a as *const _, &amp;input2.b as *const _);\n    }\n    fn main() {\n        let input = TwoBools {\n            a: true,\n            b: false\n        };\n        let input2 = TwoBools {\n            a: true,\n            b: false\n        };\n        println!("Initial memory addresses: {:?} {:?}", &amp;input as *const _, &amp;input2 as *const _);\n        take_bools(input, input2);\n    }\n</code></pre>\n<p>On a windows x64 machine, the output is as follows, without packing:</p>\n<table class="table" >\n<thead>\n<tr>\n<th>Structure</th>\n<th>Address 1</th>\n<th>Address 2</th>\n<th>Difference</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>before FFI</td>\n<td>0xf831dcf8f8</td>\n<td>0xf831dcf900</td>\n<td>8 bytes</td>\n</tr>\n<tr>\n<td>after FFI</td>\n<td>0xf831dcf718</td>\n<td>0xf831dcf720</td>\n<td>8 bytes</td>\n</tr>\n<tr>\n<td>Bool pre-FFI</td>\n<td>0xf831dcf718</td>\n<td>0xf831dcf719</td>\n<td>1 byte each</td>\n</tr>\n<tr>\n<td>bool post-FFI</td>\n<td>0xf831dcf720</td>\n<td>0xf831dcf721</td>\n<td>1 byte each</td>\n</tr>\n</tbody>\n</table>\n<p>Packing has an additional effect in this, allowing you to get rid of the 6 byte loss at a cost of a potentially \nsub-optimal read and write pattern set.</p>\n<p>To highlight the architecture difference, this is on an ARM9 processor (ARM926EJ-S, ARMv5TE microarchitecture):</p>\n<table class="table" >\n<thead>\n<tr>\n<th>Structure</th>\n<th>Address 1</th>\n<th>Address 2</th>\n<th>Difference</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>after FFI</td>\n<td>0xbec54568</td>\n<td>0xbec5456a</td>\n<td>2 bytes</td>\n</tr>\n<tr>\n<td>bool post-FFI</td>\n<td>0xbec54568</td>\n<td>0xbec54569</td>\n<td>1 byte each</td>\n</tr>\n</tbody>\n</table>\n<p>This will be a topic for another day; the important takeaway is twofold:</p>\n<ul>\n<li>You cannot rely on a structure having a fixed memory size (software developers familiar with C will know this)</li>\n<li>You cannot even rely on a structure having the same memory size without explicitly specifying packing and alignment</li>\n</ul>\n<p>The key details we need to know (and care about) regarding the calling convention all reside in the boundary itself:</p>\n<ol>\n<li><strong>How do we pass function arguments?</strong> </li>\n</ol>\n<p>Fortunately, that is an easy question to answer as both <code>cdecl</code> and <code>stdcall</code> provide the same answer, at least from an overview: all arguments \npassed to a function called using these calling conventions reside on the stack. This provides both advantages and disadvantages.</p>\n<p>Since our stack is somewhat limited in space (the default tends to hover around 2MB), this means that we need to be careful not to pass too much \ndata around. This also means that anything passed is passed by value; fortunately, we can leverage this as a feature and not a limitation with pointers, \nand anybody coming from the C/C++ world should be familiar with this (if you\'re not, <a href="https://denniskubes.com/2017/01/24/the-5-minute-guide-to-c-pointers/">this primer on the subject</a> is a pretty neat primer on the subject).</p>\n<ol start="2">\n<li><strong>How do we retrieve the return value</strong></li>\n</ol>\n<p>The return value of anything we call will also be on the stack and comes from the standard assembly rules - a <code>ret</code> instruction contains the information \nnecessary to establish where to jump back to, along with how many elements of the stack are being returned. The same rules apply as anything on the stack.</p>\n<h4 id="typesandpointers">Types and pointers</h4>\n<p>Some types (essentially all primitive types) have direct equivalents in the <code>libc</code> crate and can be passed untouched through FFI. Some, on the other hand, require a bit more work. First, let\'s talk about the exceptions:</p>\n<ul>\n<li>A Rust <code>&amp;str</code> is <strong>not</strong> exactly equivalent to a <code>*const libc::char_t</code>. There is a crucial distinction, as any Rust string (<code>&amp;str</code> or <code>String</code>) has \nthe additional requirement of being valid UTF-8. For this reason, the conversion from <code>&amp;str</code> to <code>*const libc::char_t</code> is direct, but the conversion \nfrom <code>*const libc::char_t</code> is not (and requires <a href="https://doc.rust-lang.org/beta/std/str/fn.from_utf8.html"><code>std::str::from_utf8()</code></a>). </li>\n<li>Slices can be passed and convert to their pointer type (i.e. <code>&amp;[u8]</code> -&gt; <code>*const libc::uint8_t</code>). However, <code>Vec&lt;_&gt;</code> cannot, as there is additional \ninformation needed. A <code>Vec</code> is commonly called a fat pointer, due to its knowledge of its length <em>and</em> allocation length. Fortunately, every <code>Vec&lt;_&gt;</code> can <code>Deref</code> to a slice.</li>\n</ul>\n<p>Beyond that, however, the rules are simple: if a <code>struct</code> converts down to primitive types, it can be passed provided there is an exact equivalent on \nthe other side. For the majority of cases, when going from Rust to C, a tool such as <a href="https://github.com/eqrion/cbindgen"><code>cbindgen</code></a> is a valuable \naddition to <code>build.rs</code>, in order to automatically derive C headers for your project.</p>'}})))}}},[["D14E",1,0]]]);