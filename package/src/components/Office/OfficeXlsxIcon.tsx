import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OfficeXlsxIcon',
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
              d: 'M9.5 29h19c.275 0 .5-.225.5-.5V9h-4.5c-.827 0-1.5-.673-1.5-1.5V3H9.5c-.275 0-.5.225-.5.5v25c0 .275.225.5.5.5z',
              fill: '#fff',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M28.293 8 24 3.707V7.5c0 .275.225.5.5.5h3.793z',
              fill: '#fff',
            },
          },
          {
            tag: 'path',
            props: {
              opacity: '.67',
              rule: 'evenodd',
              d: 'm29.56 7.854-5.414-5.415A1.51 1.51 0 0 0 23.086 2H9.5C8.673 2 8 2.673 8 3.5v25c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5V8.914c0-.4-.156-.777-.44-1.06zM24 3.707 28.293 8H24.5a.501.501 0 0 1-.5-.5V3.707zM9.5 29h19c.275 0 .5-.225.5-.5V9h-4.5c-.827 0-1.5-.673-1.5-1.5V3H9.5c-.275 0-.5.225-.5.5v25c0 .276.224.5.5.5z',
              fill: '#605E5C',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M25 23h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2z',
              fill: '#134A2C',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 23h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2z',
              fill: '#185C37',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M25 19h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2z',
              fill: '#21A366',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 19h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2z',
              fill: '#107C41',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M25 15h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2z',
              fill: '#33C481',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 15h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2z',
              fill: '#21A366',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M3.5 25h11a1.5 1.5 0 0 0 1.5-1.5v-11a1.5 1.5 0 0 0-1.5-1.5h-11A1.5 1.5 0 0 0 2 12.5v11A1.5 1.5 0 0 0 3.5 25z',
              fill: '#107C41',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm6 22 2.174-4.01L6.182 14h1.602l1.087 2.549c.1.242.169.423.206.542h.015c.071-.194.146-.382.224-.564L10.478 14h1.47l-2.042 3.967L12 22h-1.565L9.18 19.2c-.06-.12-.11-.246-.15-.375h-.018a1.93 1.93 0 0 1-.145.363L7.574 22H6z',
              fill: '#F9F7F7',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
