import { EditorState, RichUtils, CompositeDecorator } from 'draft-js';
import * as React from 'react';
import LinkDecorator from './Link';

const decorator = new CompositeDecorator([LinkDecorator]);

function useEditor() { 
    const [state, setState] = React.useState(() => EditorState.createEmpty(decorator));

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

    const addEntity = React.useCallback((entityType, data, mutability) => {
        setState((currentState) => {
            const contentState = currentState.getCurrentContent();
            const contentStateWithEntity = contentState.createEntity(entityType, mutability, data);
            const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
            const newState = EditorState.set(currentState,  {currentContent: contentStateWithEntity});
            return RichUtils.toggleLink(newState, newState.getSelection(), entityKey)
        })
    }, []);

    const addLink = React.useCallback((url) => {
        addEntity('link', { url }, 'MUTABLE');
    }, [addEntity]);

    const setEntityData = React.useCallback((entityKey, data) => {
        setState((currentState) => {
            const content = currentState.getCurrentContent();
            const contentStateUpdated = content.mergeEntityData(
                entityKey,
                data,
            );
            return EditorState.push(currentState, contentStateUpdated, 'apply-entity')
        })
    }, [])

    return React.useMemo(() => ({
        state,
        onChange: setState,
        toggleBlockType,
        currentBlockType,
        toggleInlineStyle,
        hasInlineStyle,
        handleKeyCommand,
        addLink,
        setEntityData,
    }), [state, 
        setState, 
        toggleInlineStyle, 
        currentBlockType, 
        toggleInlineStyle, 
        hasInlineStyle,
        handleKeyCommand,
        addLink,
        setEntityData,
    ]);
};

export default useEditor;