import { EditorState, RichUtils } from 'draft-js';
import * as React from 'react';

function useEditor() { 
    const [state, setState] = React.useState(() => EditorState.createEmpty());

    const toggleBlockType = React.useCallback(blockType => {
        RichUtils.toggleBlockType(state, blockType);
    }, []);

    const currentBlockType = React.useMemo(() => {
        const selection = state.getSelection();
        const content = state.getCurrentContent();
        const block = content.getBlockForKey(selection.getStartKey());
        return block.getType();
    }, [state]);

    const toggleInlineStyle = React.useCallback((inlineStyle) => {
        RichUtils.toggleInlineStyle(state, inlineStyle);
    }, []);

    const hasInlineStyle = React.useCallback((inlineStyle) => {
        const currentStyle = state.getCurrentInlineStyle();
        return currentStyle.has(inlineStyle);
    },[]);

    return React.useMemo(() => ({
        state,
        onChange: setState,
        toggleBlockType,
        currentBlockType,
        toggleInlineStyle,
        hasInlineStyle,
    }), [state, 
        setState, 
        toggleInlineStyle, 
        currentBlockType, 
        toggleInlineStyle, 
        hasInlineStyle]);
};

export default useEditor;