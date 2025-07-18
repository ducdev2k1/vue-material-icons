import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OfficeCodeIcon',
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
              d: 'm18 11-4 10',
              stroke: '#69AFE5',
              linecap: 'round',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20.852 12.645a.5.5 0 0 0-.704.71l.704-.71zm2.648 3.333.355.352a.5.5 0 0 0-.003-.707l-.352.355zm-3.355 2.67a.5.5 0 0 0 .71.704l-.71-.704zm-8.997.707a.5.5 0 0 0 .704-.71l-.704.71zM8.5 16.022l-.355-.352a.5.5 0 0 0 .003.707l.352-.355zm3.355-2.67a.5.5 0 0 0-.71-.704l.71.704zm8.293.003 3 2.978.704-.71-3-2.978-.704.71zm2.997 2.27-3 3.023.71.704 3-3.022-.71-.704zm-11.293 3.02-3-2.978-.704.71 3 2.978.704-.71zm-2.997-2.27 3-3.023-.71-.704-3 3.022.71.704z',
              fill: '#69AFE5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
