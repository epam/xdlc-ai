"use strict";(self.webpackChunkxdlc_ai=self.webpackChunkxdlc_ai||[]).push([[487],{8588:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"pittfals","title":"Pittfals","description":"1. Starting Fresh and Violating Framework\'s Conventions","source":"@site/docs/pittfals.md","sourceDirName":".","slug":"/pittfals","permalink":"/docs/pittfals","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/pittfals.md","tags":[],"version":"current","frontMatter":{"title":"Pittfals"},"sidebar":"tutorialSidebar","previous":{"title":"Lessons Learned","permalink":"/docs/lessons-learned"}}');var i=t(4848),a=t(8453);const r={title:"Pittfals"},s=void 0,d={},c=[{value:"1. Starting Fresh and Violating Framework&#39;s Conventions",id:"1-starting-fresh-and-violating-frameworks-conventions",level:2},{value:"Reconmendation",id:"reconmendation",level:3}];function l(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"1-starting-fresh-and-violating-frameworks-conventions",children:"1. Starting Fresh and Violating Framework's Conventions"}),"\n",(0,i.jsx)(n.p,{children:"Take for example this web site built with Docusaurus. Right after runnunbg the NPM command creating a fresh web site I started using Aider asking specific chanages. E.g. center the nav bar, change font, etc. While I did achiev some initial results, those ones where mainly workarounds and CSS hacks rather than following framework guidelines. I.e. instead of using Infima themes and prescribed styling guidlines I appoached the problem head on. And AI coding assistant was not diligernt enough to follow the guidelines. As a result, I wasted effort redoing a lot of work manually. Reading the docs did help me get the concepts and start aslking very specific tasks."}),"\n",(0,i.jsx)(n.p,{children:"This demosntrates one of the commons problems, while AI can help with boilerplates one cann fall for the easy of AI-assisted changes and end up with pooraly sturctured unmaintanbale code base."}),"\n",(0,i.jsx)(n.p,{children:"Here's a dialog with Cursor/GPT-4o showcasing how AI offered non-idiomatic solution to the given code and then self-corrected after being challenged by a defveloer."}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Cursor/GPT-4o chat example"}),(0,i.jsxs)(n.admonition,{title:"User",type:"info",children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"      <main>\n        <HomepageFeatures />\n      </main>\n    </Layout>\n"})}),(0,i.jsx)(n.p,{children:"I want to replace this piece with a contents from a given .md file, how can I achieve this?"})]}),(0,i.jsxs)(n.admonition,{title:"Assistant",type:"note",children:[(0,i.jsxs)(n.p,{children:["To replace the ",(0,i.jsx)(n.code,{children:"<HomepageFeatures />"})," component with the contents of a given ",(0,i.jsx)(n.code,{children:".md"})," file, you can use a Markdown parser to convert the Markdown content into HTML and then render it within your React component. Here's a step-by-step guide on how to achieve this:"]}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Install a Markdown Parser: You can use a library like ",(0,i.jsx)(n.code,{children:"marked"})," or ",(0,i.jsx)(n.code,{children:"react-markdown"}),"to parse Markdown content. For this example, I'll use ",(0,i.jsx)(n.code,{children:"react-markdown"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Read the Markdown File: You can use a bundler like Webpack to import the Markdown file as a string, or you can fetch it dynamically if it's hosted somewhere."}),"\n",(0,i.jsxs)(n.li,{children:["Render the Markdown Content: Use the ",(0,i.jsx)(n.code,{children:"react-markdown"}),"component to render the Markdown content."]}),"\n"]}),(0,i.jsxs)(n.p,{children:["Here's how you can modify your ",(0,i.jsx)(n.code,{children:"index.js"})," file:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// ... existing imports ...\nimport ReactMarkdown from 'react-markdown';\nimport fs from 'fs';\nimport path from 'path';\n\n// Function to read the markdown file\nfunction getMarkdownContent() {\n  const filePath = path.resolve(__dirname, 'path/to/your/file.md');\n  return fs.readFileSync(filePath, 'utf8');\n}\n\nexport default function Home() {\n  const {siteConfig} = useDocusaurusContext();\n  const markdownContent = getMarkdownContent();\n\n  return (\n    <Layout\n      title={`${siteConfig.title}`}\n      description={siteConfig.tagline}>\n      <HomepageHeader />\n      <main>\n        <ReactMarkdown>{markdownContent}</ReactMarkdown>\n      </main>\n    </Layout>\n  );\n}\n"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Explanation:"})})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Install ",(0,i.jsx)(n.code,{children:"react-markdown"}),": First, ensure you have ",(0,i.jsx)(n.code,{children:"react-markdown"})," installed in your project. You can do this by running ",(0,i.jsx)(n.code,{children:"npm install react-markdown"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Read the Markdown File: The ",(0,i.jsx)(n.code,{children:"getMarkdownContent"})," function reads the Markdown file from the specified path. Make sure to replace ",(0,i.jsx)(n.code,{children:"'path/to/your/file.md'"})," with the actual path to your Markdown file."]}),"\n",(0,i.jsxs)(n.li,{children:["Render the Markdown: The ",(0,i.jsx)(n.code,{children:"ReactMarkdown"})," component is used to render the Markdown content as HTML within the main section of your layout."]}),"\n"]}),(0,i.jsx)(n.p,{children:"This approach assumes that you are able to use Node.js features like fs and path to read files. If your environment doesn't support this (e.g., if you're running this in a browser-only context), you might need to fetch the Markdown content from a server or use a different method to load the file."})]}),(0,i.jsx)(n.admonition,{title:"User",type:"info",children:(0,i.jsx)(n.p,{children:"Is there a more Docusaurus idiomatic way? Creating a fielstream looks like a bad idea given the reach capabilities of the framework in terms of handling and rendering .md and .mdx"})}),(0,i.jsxs)(n.admonition,{title:"Assistant",type:"note",children:[(0,i.jsx)(n.p,{children:"You're right; Docusaurus has built-in support for handling Markdown and MDX files, which can be leveraged to achieve this in a more idiomatic way. Here's how you can do it using Docusaurus's capabilities:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Convert the Markdown File to MDX: If your Markdown file is not already in MDX format, consider converting it. MDX allows you to use JSX within Markdown, which is useful for integrating with React components."}),"\n",(0,i.jsx)(n.li,{children:"Create a New MDX Component: Place your MDX content in a new file within the src/pages or src/components directory."}),"\n",(0,i.jsx)(n.li,{children:"Import and Use the MDX Component: Import the MDX file as a React component and use it in your index.js."}),"\n"]}),(0,i.jsx)(n.p,{children:"Here's how you can implement this:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create an MDX File: Save your Markdown content as an .mdx file, for example, Content.mdx."}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-markdown",children:"   # Your Markdown Content\n\n   This is some content from the Markdown file.\n\n   - List item 1\n   - List item 2\n"})}),(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Import and Use the MDX File in ",(0,i.jsx)(n.code,{children:"index.js"}),":"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"   // ... existing imports ...\n   import Content from './path/to/Content.mdx';\n\n   export default function Home() {\n     const {siteConfig} = useDocusaurusContext();\n\n     return (\n       <Layout\n         title={`${siteConfig.title}`}\n         description={siteConfig.tagline}>\n         <HomepageHeader />\n         <main>\n           <Content />\n         </main>\n       </Layout>\n     );\n   }\n"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Explanation:"})})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"MDX File"})}),": The Content.mdx file contains your Markdown content. You can include any Markdown syntax, and it will be rendered as HTML."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Importing MDX"})}),": By importing the MDX file as a component, you can directly use it within your React component tree. Docusaurus will handle the rendering of the MDX content."]}),"\n"]}),(0,i.jsx)(n.p,{children:"This approach leverages Docusaurus's built-in support for MDX, making it a more idiomatic and efficient way to include Markdown content in your site."})]})]}),"\n",(0,i.jsx)(n.h3,{id:"reconmendation",children:"Reconmendation"}),"\n",(0,i.jsx)(n.p,{children:"Take your time understandring the concepts of the frameworks and libraries used. You can consult with chat models, you can ask I to explain certain concepts and try to relate to something you already know. While I can know deeply enough the framwoirk used the LLMs tendency to always complete a request, to make a completion might stay in a way. Chat bots struggle pushing back and suggesting to take a paucse and reconsider the task."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var o=t(6540);const i={},a=o.createContext(i);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);