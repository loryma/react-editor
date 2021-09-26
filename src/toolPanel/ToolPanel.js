import * as React from 'react';
import './ToolPanel.css';
import useEditor from '../textEditor/useEditor';
import cn from 'classnames';
import ToolPanelButton from './ToolPanelButton';

const BLOCK_TYPES = [
    {label: 'H1', style: 'header-one'},
    {label: 'H2', style: 'header-two'},
    {label: 'H3', style: 'header-three'},
    {label: 'H4', style: 'header-four'},
    {label: 'H5', style: 'header-five'},
    {label: 'H6', style: 'header-six'},
    {label: 'Blockquote', style: 'blockquote'},
    {label: 'UL', style: 'unordered-list-item'},
    {label: 'OL', style: 'ordered-list-item'},
    {label: 'cite', style: 'cite'},
  ];

  const INLINE_STYLES = [
    {label: 'Bold', style: 'BOLD'},
    {label: 'Italic', style: 'ITALIC'},
    {label: 'Underline', style: 'UNDERLINE'},
    {label: 'Monospace', style: 'CODE'},
    {label: 'Acent', style: 'ACCENT'},
  ];

function ToolPanel({ className }) {
    const { 
        toggleBlockType, 
        currentBlockType,
        toggleInlineStyle,
        hasInlineStyle, 
    } = useEditor();
    console.log(currentBlockType)
    return (
        <div className={cn('tool-panel', className)}>
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
    );
};

export default ToolPanel;