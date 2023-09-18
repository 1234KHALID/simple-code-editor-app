import React, { useState } from "react";
import Editor from "./Editor";
import { Highlight, themes } from "prism-react-renderer";

const exampleCode = `import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
`;

const CodeEditor = () => {
  const [code, setCode] = useState(exampleCode);
  const onValueChange = (code) => {
    setCode(code);
  };

  const highlightCode = (code) => (
    <Highlight theme={themes.github} code={code} language="jsx">
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <div style={style} >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </div>
      )}
    </Highlight>
  );

  return (
    <Editor
      value={code}
      onValueChange={onValueChange}
      highlight={highlightCode}
    />
  );
};

export default CodeEditor;
