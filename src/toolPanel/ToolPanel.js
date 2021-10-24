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
    } = useEditorApi();

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
        </div>
    );
};

export default ToolPanel;