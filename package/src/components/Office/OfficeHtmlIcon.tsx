import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OfficeHtmlIcon',
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
              d: 'M8.5 24h15a.5.5 0 0 0 0-1h-15a.5.5 0 0 0 0 1zm0 2h15a.5.5 0 0 0 0-1h-15a.5.5 0 0 0 0 1z',
              fill: '#C8C6C4',
            },
          },
          {
            tag: 'path',
            props: {
              rule: 'evenodd',
              d: 'M16 20.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z',
              stroke: '#69AFE5',
            },
          },
          {
            tag: 'path',
            props: {
              rule: 'evenodd',
              d: 'M16 20.5c.828 0 1.5-2.015 1.5-4.5s-.672-4.5-1.5-4.5-1.5 2.015-1.5 4.5.672 4.5 1.5 4.5z',
              stroke: '#69AFE5',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M12 15h8v-1h-8v1zm0 3h8v-1h-8v1z',
              fill: '#69AFE5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
