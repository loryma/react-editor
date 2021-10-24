import * as React from 'react';
import './ToolPanel.css';
import { useEditorApi } from '../textEditor/context';
import cn from 'classnames';
import ToolPanelButton from './ToolPanelButton';
import { BLOCK_TYPES, INLINE_STYLES } from '../textEditor/config';

function ToolPanel({ className }) {
    const { 
        toggleBlockType, 
        currentBlockType,
        toggleInlineStyle,
        hasInlineStyle, 
        addLink,
        toHTML,
    } = useEditorApi();

    const handlerAddLink = () => {
        const url = prompt('URL:');
        if (url) {
            addLink(url);
        }
    }

    const handleToHTML = () => {
        const html = toHTML();
        console.log(html);
    }

    return (
        <div className={cn('toolPanel', className)}>
            <div className='toolPanel__row'>
                {BLOCK_TYPES.map(({ label, style}) => (
                    <ToolPanelButton 
                        key={style}
                        style={style}
                        onToggle={toggleBlockType}
                        isActive={style === currentBlockType}
                    >
                        {label}
                    </ToolPanelButton>
                ) )}
            </div>
            <div className='toolPanel__row'>
                {INLINE_STYLES.map(({ label, style }) => (
                    <ToolPanelButton
                        key={style}
                        style={style}
                        onToggle={toggleInlineStyle}
                        isActive={hasInlineStyle(style)}
                    >
                        {label}
                    </ToolPanelButton>
                ))}
            </div>
            <div className='toolPanel__row'>
                <button onClick={handlerAddLink}>
                    🔗 Add link
                </button>
                <button onClick={handleToHTML}>Print</button>
            </div>
        </div>
    );
};

export default ToolPanel;