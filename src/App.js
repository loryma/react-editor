import React from 'react';
import TextEditor from './textEditor';
import ToolPanel from './toolPanel';
import BottomToolPanel from './toolPanel/BottomToolPanel';
import TextEditorProvider from './textEditor/context';
import 'draft-js/dist/Draft.css';
import './App.css';

function App() {
  return (
    <TextEditorProvider>
      <ToolPanel />
      <TextEditor />
      <BottomToolPanel />
    </TextEditorProvider>
  )
};

export default App;