import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OfficePdfIcon',
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
              rule: 'evenodd',
              d: 'M23.5 13h-15a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1zm0 2h-15a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1zm-15 2h15a.5.5 0 0 0 0-1h-15a.5.5 0 0 0 0 1z',
              fill: '#C8C6C4',
            },
          },
          {
            tag: 'path',
            props: {
              rule: 'evenodd',
              d: 'M13 19h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm7 2c0-.551-.449-1-1-1h-6c-.551 0-1 .449-1 1v4c0 .551.449 1 1 1h6c.551 0 1-.449 1-1v-4zM5 26h4.75a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zm17.25-6H27a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4.75a.25.25 0 0 1-.25-.25v-5.5a.25.25 0 0 1 .25-.25z',
              fill: '#D65532',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
