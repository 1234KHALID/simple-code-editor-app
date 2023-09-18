import React, { useRef } from 'react';
import { styles } from './styles';
function Editor(props) {
  const {
    value,
    highlight,
    onValueChange,
  } = props;

  const inputRef = useRef(null);

  const handleChange = (e) => {
    const { value } = e.currentTarget;
    onValueChange(value);
  };

  const highlighted = highlight(value);

  return (
    <div style={{ ...styles.container }}>
      <pre
        aria-hidden="true"
        style={{
          ...styles.editor, ...styles.highlight,
        }}
        {...(typeof highlighted === 'string'
          ? { dangerouslySetInnerHTML: { __html: highlighted + '<br />' } }
          : { children: highlighted })}
      />
      <textarea
        ref={inputRef}
        style={{
          ...styles.editor,
          ...styles.textarea,
        }}
        value={value}
        onChange={handleChange}
        spellCheck={false}
        data-gramm={false}
      />
    </div>
  );
}
export default Editor;
