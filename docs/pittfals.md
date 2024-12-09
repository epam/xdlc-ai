## 1. Starting fresh and vialating frameworks 

Take for example this web site built with Docusaurus. Right after runnunbg the NPM command creating a fresh web site I started using Aider asking specific chanages. E.g. center the nav bar, change font, etc. While I did achiev some initial results, those ones where mainly workarounds and CSS hacks rather than following framework guidelines. I.e. instead of using Infima themes and prescribed styling guidlines I appoached the problem head on. And AI coding assistant was not diligernt enough to follow the guidelines. As a result, I wasted effort redoing a lot of work manually. Reading the docs did help me get the concepts and start aslking very specific tasks.

This demosntrates one of the commons problems, while AI can help with boilerplates one cann fall for the easy of AI-assisted changes and end up with pooraly sturctured unmaintanbale code base.

### Example

Here's a dialog with Cursor/GPT-4o showcasing how AI offered non idiomatice solution to the given code and then self-correctly after being challenged by a defveloer.


I want to replace this piece with a contents from a given .md file, how can I achieve this?
```
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
```

To replace the <HomepageFeatures /> component with the contents of a given .md file, you can use a Markdown parser to convert the Markdown content into HTML and then render it within your React component. Here's a step-by-step guide on how to achieve this:
Install a Markdown Parser: You can use a library like marked or react-markdown to parse Markdown content. For this example, I'll use react-markdown.
Read the Markdown File: You can use a bundler like Webpack to import the Markdown file as a string, or you can fetch it dynamically if it's hosted somewhere.
Render the Markdown Content: Use the react-markdown component to render the Markdown content.
Here's how you can modify your index.js file:
}
Explanation:
Install react-markdown: First, ensure you have react-markdown installed in your project. You can do this by running npm install react-markdown.
Read the Markdown File: The getMarkdownContent function reads the Markdown file from the specified path. Make sure to replace 'path/to/your/file.md' with the actual path to your Markdown file.
Render the Markdown: The ReactMarkdown component is used to render the Markdown content as HTML within the main section of your layout.
This approach assumes that you are able to use Node.js features like fs and path to read files. If your environment doesn't support this (e.g., if you're running this in a browser-only context), you might need to fetch the Markdown content from a server or use a different method to load the file.
Is there a more Docusaurus idiomatic way? Creating a fielstream looks like a bad idea given the reach capabilities of the framework in terms of handling and rendering .md and .mdx

You're right; Docusaurus has built-in support for handling Markdown and MDX files, which can be leveraged to achieve this in a more idiomatic way. Here's how you can do it using Docusaurus's capabilities:
Convert the Markdown File to MDX: If your Markdown file is not already in MDX format, consider converting it. MDX allows you to use JSX within Markdown, which is useful for integrating with React components.
Create a New MDX Component: Place your MDX content in a new file within the src/pages or src/components directory.
Import and Use the MDX Component: Import the MDX file as a React component and use it in your index.js.
Here's how you can implement this:
Create an MDX File: Save your Markdown content as an .mdx file, for example, Content.mdx.
   # Your Markdown Content

   This is some content from the Markdown file.

   - List item 1
   - List item 2
Import and Use the MDX File in index.js:
}
Explanation:
MDX File: The Content.mdx file contains your Markdown content. You can include any Markdown syntax, and it will be rendered as HTML.
Importing MDX: By importing the MDX file as a component, you can directly use it within your React component tree. Docusaurus will handle the rendering of the MDX content.
This approach leverages Docusaurus's built-in support for MDX, making it a more idiomatic and efficient way to include Markdown content in your site.

### Reconmendation

Take your time understandring the concepts of the frameworks and libraries used. You can consult with chat models, you can ask I to explain certain concepts and try to relate to something you already know. While I can know deeply enough the framwoirk used the LLMs tendency to always complete a request, to make a completion might stay in a way. Chat bots struggle pushing back and suggesting to take a paucse and reconsider the task.