import React, { useState } from "react";
import "./App.css";
import { marked } from "marked";

const defaultText = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

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

There's also [links](https://www.freecodecamp.org), and
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
      <h1 className="font-3xl font-sans font-bold text-center">
        Markdown Preview
      </h1>
      <div id="container">
        <textarea
          id="editor"
          onChange={handleChange}
          defaultValue={text}
        ></textarea>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
        ></div>
      </div>
    </div>
  );
}

export default App;
