import Immutable from 'immutable';
import { DefaultDraftBlockRenderMap } from 'draft-js';

const CUSTOM_BLOCK_RENDER_MAP = Immutable.Map({
    cite: {
        element: 'cite',
    },
});

export const CUSTOM_STYLE_MAP = {
    'ACCENT': {
        backgroundColor: '#F7F6F3',
        color: '#A41E68',
    },
    'CODE': {
        fontFamily: 'monospace',
    },
};

export const BLOCK_RENDER_MAP = DefaultDraftBlockRenderMap.merge(CUSTOM_BLOCK_RENDER_MAP);