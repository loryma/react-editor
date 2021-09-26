import React from 'react';
import TextEditor from './textEditor';
import ToolPanel from './toolPanel';
import TextEditorProvider from './textEditor/context';
import 'draft-js/dist/Draft.css';

function App() {
  return (
    <TextEditorProvider>
      <ToolPanel />
      <TextEditor />
    </TextEditorProvider>
  )
};

export default App;