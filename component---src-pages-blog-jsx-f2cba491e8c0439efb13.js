(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{STHm:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r="block pt-12 md:flex",i="pb-6 md:w-full md:max-w-150 md:p-0",s="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase",c="flex-none text-lg text-gray-600 font-light bg-white md:flex-1 md:pl-20";t.a=function(e){var t=e.title,a=e.children;return l.a.createElement("div",{className:r},l.a.createElement("div",{className:i},l.a.createElement("h2",{className:s},t)),l.a.createElement("div",{className:c},a))}},hbLQ:function(e,t,a){"use strict";var n=a("Wbzz"),l=a("q1tI"),r=a.n(l),i="mb-6",s="font-semibold text-gray-900 pb-1",c="text-md text-gray-600 font-light";t.a=function(e){var t,a=e.name,l=e.description,m=e.link,o=void 0!==m&&m,d=e.internal;return t=void 0!==d&&d?r.a.createElement(n.Link,{to:o},a):r.a.createElement("a",{href:o},a),r.a.createElement("div",{className:i},r.a.createElement("h3",{className:s+" "+(o?"hover:underline hover:text-black":"")},o?t:a),r.a.createElement("p",{className:c},l))}},"xGn/":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return f}));var n=a("mwIZ"),l=a.n(n),r=a("q1tI"),i=a.n(r),s=a("STHm"),c=a("hbLQ"),m=function(e){var t=e.posts;return i.a.createElement(s.a,{title:"All Blog Posts"},t.map((function(e){return i.a.createElement(c.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0})})))},o=a("eNIv"),d=a("6uTu"),u=a("ivnd"),f=(t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges;return l()(t,"site.siteMetadata.blogEnabled",!1)?i.a.createElement(d.a,null,i.a.createElement(u.a,{title:"Blog"}),i.a.createElement(o.a,{metadata:t.site.siteMetadata}),a&&a.length&&i.a.createElement(m,{posts:a})):null},"3082354403")}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-f2cba491e8c0439efb13.js.map