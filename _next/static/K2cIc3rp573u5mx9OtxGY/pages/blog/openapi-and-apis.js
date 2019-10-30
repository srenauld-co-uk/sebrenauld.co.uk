(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6IQb":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/openapi-and-apis",function(){return n("Kg48")}])},Kg48:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),i=n.n(o),a=n("2qpg"),r=n("8Kt/"),s=n.n(r),l=i.a.createElement;t.default=function(e){var t={ctime:"2019-10-17T23:03:40.783Z",mtime:"2019-10-17T23:03:40.783Z"},n=(t.title?t.title+" | ":"")+"Seb Renauld: The Blog";return l(a.a,null,l(s.a,null,l("title",{key:"title"},n),l("meta",{name:"description",content:t.description||""}),l("meta",{key:"og:type",name:"og:type",content:"article"}),l("meta",{key:"og:title",name:"og:title",content:n}),l("meta",{key:"og:description",name:"og:description",content:t.description||""}),t.image&&l("meta",{key:"og:image",name:"og:image",content:t.image}),t.url&&l("meta",{key:"og:url",name:"og:url",content:t.url}),l("meta",{key:"article:published_time",name:"article:published_time",content:t.ctime}),l("meta",{key:"article:modified_time",name:"article:modified_time",content:t.mtime})),l("div",null,l("div",{class:"blog-article",dangerouslySetInnerHTML:{__html:'<h3 id="onopenapitoolingsforcodegenerationandapis">On OpenAPI, toolings for code generation, and APIs</h3>\n<p>Over the past week, I\'ve had the opportunity to plan ahead for the development of multiple language SDKs for \n<a href="https://www.loriot.io">LORIOT</a>. As a LoRa back-office and network provider, they\'ve been consistently open and \nactively encourage people to build on top of their solution.</p>\n<p>Due to the scope of it, it made sense to leverage the fact that they have a (mostly correct) OpenAPI schema for \nall their APIs (Available <a href="https://docs.loriot.io">here</a>). The biggest pain point when writing code that \nprovides interoperability with an external service tends to be the network layer itself, and due to the customization \nconstraints of the actual business logic, it made sense to leverage this document and programmatically generate \nthis network layer.</p>\n<h4 id="enteropenapigenerator">Enter <code>openapi-generator</code></h4>\n<p>The OpenAPI foundation has built and maintains a tool to generate network-level code for a wide variety of languages. \nAs this is exactly what I was looking for, it only made sense to test it. My initial target language was Rust, because \nI have a direct need for this language, but Javascript is also considered.</p>\n<p>The Rust module was, to be frank, in shambles. I\'ve contributed a \n<a href="https://github.com/OpenAPITools/openapi-generator/pull/4175">pull request</a> to help bring it up into 2019. At its core, \nit was sane, it was just using fully blocking I/O.</p>\n<p>The generated code is directly usable, and well structured if the openAPI input is sane. This requirement will be the \nsubject of this article.</p>\n<h4 id="openapipitfalls">OpenAPI pitfalls</h4>\n<p>OpenAPI is a well-codified standard designed to describe HTTP APIs. At its core, it is aimed at being able to test an \nimplementation against the schema, or generate documentation from the schema. It also heavily encourages sane design \ndecisions such as re-using entities by actively encouraging the definition and re-use of "components".</p>\n<p>Here are a couple of mistakes you can avoid to make automatic testing and code-generation of your API clients seamless:</p>\n<h5 id="1notdefiningclearentities">1. Not defining clear entities</h5>\n<p>Consider the following case: you have an API returning cats. <code>/cats</code> is your paginated list, <code>/cat/{id}</code> is your entity \nretrieval. It is very tempting to not define an entity and define the element as a free-flowing schema in both cases, \nlike so:</p>\n<pre><code>paths:\n  /cats:\n    get:\n      summary: Retrieve a paginated slice of cats\n      responses:\n        200:\n          description: Success\n          content:\n            application/json:\n              schema:\n                type: object\n                properties:\n                  items:\n                    type: array\n                    items:\n                      type: object\n                      ...\n  /cat/{catId}:\n    get:\n      summary: Retrieve a cat\n      parameters:\n        - $ref: \'#/components/parameters/catId\'\n      responses:\n        200:\n          description: Success\n          content:\n            application/json:\n              schema:\n                type: object\n                ...\n</code></pre>\n<p>Doing this is a nice and straightforward way to get documentation going, as the entities are represented. However, it has two \nserious drawbacks:</p>\n<ol>\n<li>The information that the two entities are <em>the same</em> has been lost. To any documentation/validation/generation tool, these \nare now two separate entities</li>\n<li>Modifying the schema of this entity requires the author to modify N copies.</li>\n</ol>\n<h5 id="2notdefiningrequiredproperties">2. Not defining required properties</h5>\n<p>Another very common mistake is just describing the schema without clearly labeling optional and mandatory parameters. Consider \nthe generated signature of a method where this has been done, and when it has not:</p>\n<pre><code>fn models_get(&amp;self, page: Option&lt;f32&gt;, per_page: Option&lt;f32&gt;, filter: Option&lt;&amp;str&gt;, sort: Option&lt;&amp;str&gt;) -&gt; Box&lt;dyn Future&lt;Item = Model, Error = Error&gt; + Send&gt;;\nfn models_get(&amp;self, page: usize, per_page: usize, sort: SortOrder, filter: Option&lt;&amp;str&gt;) -&gt; Box&lt;dyn Future&lt;Item = Model, Error = Error&gt; + Send&gt;;\n</code></pre>\n<p>The second one is clearer and easier to manipulate programmatically: it clearly describes what is optional and what is not. The <code>page</code> and <code>per_page</code> \nelements are mandatory and well-typed; the <code>sort</code> is a defined enum of possible choices (<code>asc</code>, <code>desc</code>). The <code>filter</code> is free-flow, and as such, \nrepresented by a string slice. Much neater, much easier to manage and much clearer.</p>\n<h5 id="3notproperlydefiningerrors">3. Not properly defining errors</h5>\n<p>Following the lead of the previous item, not properly defining errors prevent you from gleaning additional context from your API, <em>particularly</em> \nif the API is not fully RESTful to start with (and some errors come up as successful - i.e. 2xx or 3xx HTTP status code). Additionally, if an error \nschema is defined, it will surface both in documentation tools and generators, so it is also worth being precise on this.</p>\n<h4 id="thetools">The tools</h4>\n<p>Following these guidelines enables the use of a couple of very neat tools:</p>\n<ul>\n<li><a href="http://dredd.io/en/latest/"><code>dredd</code></a> for API validation, to make sure you have built what you described</li>\n<li><a href="https://stoplight.io/docs/"><code>Stoplight</code></a> and <a href="https://redocly.github.io/redoc/"><code>ReDoc</code></a> to write your documentation for you</li>\n<li><code>openapi-generator</code> to write some of the business logic for you</li>\n</ul>\n<p>I am in the process of writing the business logic for the LORIOT SDK in multiple languages and intend to reap all the benefits of these tools. Watch \n<a href="https://github.com/srenauld/loriot-codegen">the Github repository</a> to keep up to date with progress (or contribute a version in a language I am not an expert at!). I will have the pleasure of being able to actually use all the tools I have mentioned here in a real environment and will make sure to document all of it.</p>'}})))}}},[["6IQb",1,0]]]);