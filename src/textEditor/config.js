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

export const BLOCK_TYPES = [
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
    {label: 'unstyled', style: 'unstyled'},
  ];

  export const INLINE_STYLES = [
    {label: 'Bold', style: 'BOLD'},
    {label: 'Italic', style: 'ITALIC'},
    {label: 'Underline', style: 'UNDERLINE'},
    {label: 'Code', style: 'CODE'},
    {label: 'Accent', style: 'ACCENT'},
  ];


export const BlockType = {
    h1: "header-one",
    h2: "header-two",
    h3: "header-three",
    h4: "header-four",
    h5: "header-five",
    h6: "header-six",
    blockquote: "blockquote",
    code: "code-block",
    list: "unordered-list-item",
    orderList: "ordered-list-item",
    cite: "cite",
    default: "unstyled",
  }
  
export const InlineStyle = {
    BOLD: "BOLD",
    ITALIC: "ITALIC",
    UNDERLINE: "UNDERLINE",
    ACCENT: "ACCENT",
  }

export const BLOCK_RENDER_MAP = DefaultDraftBlockRenderMap.merge(CUSTOM_BLOCK_RENDER_MAP);