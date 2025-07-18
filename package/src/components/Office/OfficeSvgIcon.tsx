import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OfficeSvgIcon',
  props: {
    size: {
      type: [String, Number],
      default: 32,
    },
    color: String,
    viewBox: {
      type: String,
      default: '0 0 32 32',
    },
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        [
          {
            tag: 'path',
            props: {
              d: 'M6.5 29h19c.275 0 .5-.225.5-.5V9h-4.5c-.827 0-1.5-.673-1.5-1.5V3H6.5c-.275 0-.5.225-.5.5v25c0 .275.225.5.5.5z',
              fill: '#fff',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M25.293 8 21 3.707V7.5c0 .275.225.5.5.5h3.793z',
              fill: '#fff',
            },
          },
          {
            tag: 'path',
            props: {
              opacity: '.67',
              rule: 'evenodd',
              d: 'm26.56 7.854-5.414-5.415A1.51 1.51 0 0 0 20.086 2H6.5C5.673 2 5 2.673 5 3.5v25c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5V8.914c0-.4-.156-.777-.44-1.06zM21 3.707 25.293 8H21.5a.501.501 0 0 1-.5-.5V3.707zM6.5 29h19c.275 0 .5-.225.5-.5V9h-4.5c-.827 0-1.5-.673-1.5-1.5V3H6.5c-.275 0-.5.225-.5.5v25c0 .276.224.5.5.5z',
              fill: '#605E5C',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm17.327 19.016 6.516 2.443a.242.242 0 0 1-.026.461l-3.117.78-.78 3.117a.242.242 0 0 1-.46.026l-2.444-6.516a.242.242 0 0 1 .311-.31z',
              fill: '#0078D7',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M10.5 21.5c.716-4.704 4.828-8.415 10-9',
              stroke: '#C8C6C4',
              linecap: 'round',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M11.5 25h-2v1h2v-1zm-2 0a.5.5 0 0 1-.5-.5H8A1.5 1.5 0 0 0 9.5 26v-1zm-.5-.5v-2H8v2h1zm0-2a.5.5 0 0 1 .5-.5v-1A1.5 1.5 0 0 0 8 22.5h1zm.5-.5h2v-1h-2v1zm2 0a.5.5 0 0 1 .5.5h1a1.5 1.5 0 0 0-1.5-1.5v1zm.5.5v2h1v-2h-1zm0 2a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5h-1zM23.5 14h-2v1h2v-1zm-2 0a.5.5 0 0 1-.5-.5h-1a1.5 1.5 0 0 0 1.5 1.5v-1zm-.5-.5v-2h-1v2h1zm0-2a.5.5 0 0 1 .5-.5v-1a1.5 1.5 0 0 0-1.5 1.5h1zm.5-.5h2v-1h-2v1zm2 0a.5.5 0 0 1 .5.5h1a1.5 1.5 0 0 0-1.5-1.5v1zm.5.5v2h1v-2h-1zm0 2a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5h-1zM14 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
              fill: '#0078D7',
            },
          },
          {
            tag: 'path',
            props: {
              rule: 'evenodd',
              d: 'M11 15c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm5 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0z',
              fill: '#fff',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
