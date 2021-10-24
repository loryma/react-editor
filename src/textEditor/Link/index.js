import { ContentBlock, ContentState, DraftDecorator } from 'draft-js';
import Link from './Link';

function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null && 
      contentState.getEntity(entityKey).getType() === 'link'
    )
  }, callback);
};

const decorator = {
  strategy: findLinkEntities,
  component: Link,
};

export default decorator;