import * as React from 'react';
import { useEditorApi } from '../context';

function Link({ contentState, entityKey, children }) {
  const { url } = contentState.getEntity(entityKey).getData();
  const { setEntityData } = useEditorApi();

  const handlerClick = () => {
    const newUrl = prompt('URL:', url);
    if (newUrl) {
      setEntityData(entityKey, {url: newUrl});
    }
  }

  return (
    <a href={url} onClick={handlerClick}>
      {children}
    </a>
  );
};

export default Link;