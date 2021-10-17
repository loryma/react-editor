import { EditorState, RichUtils } from 'draft-js';
import * as React from 'react';

function useEditor() { 
    const [state, setState] = React.useState(() => EditorState.createEmpty());

    const toggleBlockType = React.useCallback(blockType => {
        setState(state => RichUtils.toggleBlockType(state, blockType));
    }, []);

    const currentBlockType = React.useMemo(() => {
        const selection = state.getSelection();
        const content = state.getCurrentContent();
        const block = content.getBlockForKey(selection.getStartKey());
        return block.getType();
    }, [state]);

    const toggleInlineStyle = React.useCallback((inlineStyle) => {
        setState(state => RichUtils.toggleInlineStyle(state, inlineStyle));
    }, []);

    const hasInlineStyle = React.useCallback((inlineStyle) => {
        const currentStyle = state.getCurrentInlineStyle();
        return currentStyle.has(inlineStyle);
    },[state]); 

    const handleKeyCommand = React.useCallback((command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setState(newState);
            return 'handled';
        }

        return 'not-handled';
    }, []);

    return React.useMemo(() => ({
        state,
        onChange: setState,
        toggleBlockType,
        currentBlockType,
        toggleInlineStyle,
        hasInlineStyle,
        handleKeyCommand,
    }), [state, 
        setState, 
        toggleInlineStyle, 
        currentBlockType, 
        toggleInlineStyle, 
        hasInlineStyle,
        handleKeyCommand,
    ]);
};

export default useEditor;