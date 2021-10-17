import * as React from 'react';
import cn from 'classnames';
import './ToolPanelButton.css';

function ToolPanelButton({ style, isActive, onToggle, children }) {
    const onMouseDown = (e) => {
        e.preventDefault();
        onToggle(style);
    };

    return (
        <button
            onMouseDown={onMouseDown}
            className={cn('tool-panel__button', isActive && 'tool-panel__button--active')}
        >
            {children}
        </button>
    );
};

export default ToolPanelButton;