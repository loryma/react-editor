import * as React from 'react';
import useEditor from './useEditor';

const TextEditorContext = React.createContext(undefined);

const useEditorApi = () => {
    const context = React.useContext(TextEditorContext);

    if (context === undefined) {
        throw new Error('useEditorApi must be used within TextEditorContext');
    }

    return context;
};

function TextEditorProvider({ children }) {
    const editorApi = useEditor();

    return (
        <TextEditorContext.Provider value={editorApi}>
            {children}
        </TextEditorContext.Provider>
    );
};

export default TextEditorProvider;
export { useEditorApi };