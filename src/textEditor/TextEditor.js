import * as React from 'react';
import { Editor } from 'draft-js';
import { useEditorApi } from './context';
import { BLOCK_RENDER_MAP, CUSTOM_STYLE_MAP } from './config';
import cn from 'classnames';

function TextEditor({ className }) {
    const { state, onChange } = useEditorApi();

    return (
        <div className={cn('text-editor', className)}>
            <Editor 
                placeholder="Enter text"
                editorState={state}
                onChange={onChange}
                blockRenderMap={BLOCK_RENDER_MAP}
                customStyleMap={CUSTOM_STYLE_MAP}    
           />
        </div>
    );
};

export default TextEditor;