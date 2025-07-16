import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OfficeDocxIcon',
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
              d: 'M25.5 22H17v1h8.5a.5.5 0 0 0 0-1z',
              fill: '#103F91',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M25.5 19H17v1h8.5a.5.5 0 0 0 0-1z',
              fill: '#185ABD',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M25.5 16H17v1h8.5a.5.5 0 0 0 0-1z',
              fill: '#2B7CD3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M25.5 13H17v1h8.5a.5.5 0 0 0 0-1z',
              fill: '#41A5EE',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M3.5 25h11a1.5 1.5 0 0 0 1.5-1.5v-11a1.5 1.5 0 0 0-1.5-1.5h-11A1.5 1.5 0 0 0 2 12.5v11A1.5 1.5 0 0 0 3.5 25z',
              fill: '#185ABD',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M7.215 20.73h.022C7.246 20.615 8.37 15 8.37 15h1.306s1.14 5.353 1.175 5.72h.017c.015-.252.944-5.72.944-5.72H13l-1.462 7h-1.389s-1.153-5.53-1.162-5.628h-.018C8.959 16.485 7.886 22 7.886 22h-1.41L5 15h1.21s1 5.607 1.005 5.73z',
              fill: '#F9F7F7',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
