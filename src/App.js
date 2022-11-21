import React, { useState } from "react";
import "./App.css";
import { marked } from "marked";

const defaultText = `
# Welcome to my React Markdown Previewer!

## by Lorenzo Zemp
### built using ReactJS and TailwindCSS

[Here's](https://lorenzozemp.com) a link to my website!

### The following is an example of Markdown:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://lorenzozemp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Sonic Running Gif](https://media.tenor.com/OEVTZMaQ_g4AAAAj/sonic-running.gif)
`;

function App() {
  const [text, setText] = useState(defaultText);

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <h1 className="font-3xl font-mono text-center">Markdown Preview</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2" id="container">
        <textarea
          className="border-none shadow-lg shadow-cyan-300 m-5 p-2 resize-none h-screen"
          id="editor"
          onChange={handleChange}
          defaultValue={text}
        ></textarea>
        <div
          className="shadow-lg shadow-amber-500 m-5 p-2 h-screen overflow-auto"
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
        ></div>
      </div>
    </div>
  );
}

export default App;
