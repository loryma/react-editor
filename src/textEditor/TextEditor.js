import * as React from 'react';
import { Editor } from 'draft-js';
import { useEditorApi } from './context';
import { BLOCK_RENDER_MAP, CUSTOM_STYLE_MAP } from './config';
import cn from 'classnames';
import './TextEditor.css';

function TextEditor({ className }) {
    const { state, onChange, handleKeyCommand, handlerKeyBinding } = useEditorApi();

    return (
        <div className={cn('textEditor', className)}>
            <Editor 
                placeholder="Enter text"
                editorState={state}
                onChange={onChange}
                handleKeyCommand={handleKeyCommand}
                blockRenderMap={BLOCK_RENDER_MAP}
                customStyleMap={CUSTOM_STYLE_MAP}    
                keyBindingFn={handlerKeyBinding}
           />
        </div>
    );
};

export default TextEditor;