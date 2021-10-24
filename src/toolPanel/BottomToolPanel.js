import * as React from 'react';
import './ToolPanel.css';
import { useEditorApi } from '../textEditor/context';
import cn from 'classnames';

function BottomToolPanel({ className }) {
    const { 
        addLink,
        toHTML,
    } = useEditorApi();
    const [html, setHtml] = React.useState('');

    const handlerAddLink = () => {
        const url = prompt('URL:');
        if (url) {
            addLink(url);
        }
    }

    const handleToHTML = () => {
        const html = toHTML();
        console.log(html);
        setHtml(html);
    }

    return (
      <>
        <div className={cn('toolPanel', 'toolPanel--bottom', className)}>
          <div className='toolPanel__row'>
              <button className="toolPanel__action-button" onClick={handlerAddLink}>
                  🔗 Add link
              </button>
              <button className="toolPanel__action-button" onClick={handleToHTML}>
                  export HTML
              </button>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }}>
        </div>
      </>
    );
};

export default BottomToolPanel;