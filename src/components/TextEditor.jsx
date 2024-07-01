// Import React dependencies.
import React, { useState } from "react";
// Import the Slate editor factory.
import { createEditor } from "slate";

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";

const TextEditor = ({ initialText }) => {
  const [editor] = useState(() => withReact(createEditor()));
  console.log(initialText);
  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: initialText }],
    },
  ];
  // Render the Slate context.
  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable />
    </Slate>
  );
};

export default TextEditor;
