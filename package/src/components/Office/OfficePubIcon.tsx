import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OfficePubIcon',
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
              d: 'M9.5 29h19a.5.5 0 0 0 .5-.5V9h-4.5A1.5 1.5 0 0 1 23 7.5V3H9.5a.5.5 0 0 0-.5.5v25a.5.5 0 0 0 .5.5z',
              fill: '#fff',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M28.29 8 24 3.71V7.5a.5.5 0 0 0 .5.5h3.79z',
              fill: '#fff',
            },
          },
          {
            tag: 'path',
            props: {
              opacity: '.67',
              rule: 'evenodd',
              d: 'm29.56 7.85-5.41-5.41A1.52 1.52 0 0 0 23.09 2H9.5A1.5 1.5 0 0 0 8 3.5v25A1.5 1.5 0 0 0 9.5 30h19a1.5 1.5 0 0 0 1.5-1.5V8.91a1.52 1.52 0 0 0-.44-1.06zM24 3.71 28.29 8H24.5a.5.5 0 0 1-.5-.5V3.71zM9.5 29h19a.5.5 0 0 0 .5-.5V9h-4.5A1.5 1.5 0 0 1 23 7.5V3H9.5a.5.5 0 0 0-.5.5v25a.5.5 0 0 0 .5.5z',
              fill: '#605E5C',
            },
          },
          {
            tag: 'rect',
            props: {
              x: '2',
              y: '11',
              width: '14',
              height: '14',
              rx: '1.5',
              fill: '#038387',
            },
          },
          {
            tag: 'path',
            props: {
              rule: 'evenodd',
              d: 'M11.64 14.81a3.21 3.21 0 0 0-2.12-.62H6.78v7.71H8v-2.73h1.45a3.462 3.462 0 0 0 1.55-.32 2.47 2.47 0 0 0 1.37-2.25 2.2 2.2 0 0 0-.73-1.79zM9.3 18H8v-2.74h1.34a1.36 1.36 0 0 1 1.54 1.4 1.37 1.37 0 0 1-.44 1A1.72 1.72 0 0 1 9.3 18z',
              fill: '#fff',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M25.5 22H17v1h8.5a.5.5 0 0 0 0-1z',
              fill: '#038387',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M25.5 19H17v1h8.5a.5.5 0 0 0 0-1z',
              fill: '#1A9BA1',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M17 13h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-8v-4z',
              fill: '#37C6D0',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
