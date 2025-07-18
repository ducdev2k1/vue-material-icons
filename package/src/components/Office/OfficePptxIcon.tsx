import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OfficePptxIcon',
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
              d: 'm21 18-1-1h-2l-1 1v2.973a4.977 4.977 0 0 0 7.535.563A5 5 0 0 0 26 18h-5z',
              fill: '#ED6C47',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M17 15.027V18h4v-5a4.977 4.977 0 0 0-4 2.027z',
              fill: '#FF8F6B',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M22 12a5 5 0 0 1 5 5h-5v-5z',
              fill: '#FFC7B5',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M3.5 25h11a1.5 1.5 0 0 0 1.5-1.5v-11a1.5 1.5 0 0 0-1.5-1.5h-11A1.5 1.5 0 0 0 2 12.5v11A1.5 1.5 0 0 0 3.5 25z',
              fill: '#C43E1C',
            },
          },
          {
            tag: 'path',
            props: {
              rule: 'evenodd',
              d: 'M11.64 14.66c-.49-.427-1.195-.64-2.116-.64H6.782V22h1.18l.005-2.817h1.467c.587 0 1.098-.116 1.544-.341a2.446 2.446 0 0 0 1.036-.938c.242-.404.358-.87.358-1.39 0-.81-.245-1.428-.733-1.854zM9.576 18H7.962v-3h1.662c.99 0 1.537.66 1.537 1.538 0 .453-.183.872-.44 1.108-.259.235-.64.354-1.144.354z',
              fill: '#fff',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
