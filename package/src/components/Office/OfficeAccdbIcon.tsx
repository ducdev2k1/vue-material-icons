import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OfficeAccdbIcon',
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
              fill: '#AF2031',
            },
          },
          {
            tag: 'path',
            props: {
              rule: 'evenodd',
              d: 'M10 14H8.08L5 22h1.71l.65-2h3.24l.68 2H13l-3-8zm-1 1.34C9 15.5 10.33 19 10.33 19H7.74L9 15.34z',
              fill: '#fff',
            },
          },
          {
            tag: 'rect',
            props: {
              x: '20',
              y: '17',
              width: '4',
              height: '1',
              rx: '.5',
              fill: '#E08095',
            },
          },
          {
            tag: 'rect',
            props: {
              x: '20',
              y: '20',
              width: '4',
              height: '1',
              rx: '.5',
              fill: '#C94F60',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M18.5 20H17v1h1.5a.5.5 0 0 0 0-1z',
              fill: '#AF2031',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M18.5 17H17v1h1.5a.5.5 0 0 0 0-1zM25 14v8.5a.5.5 0 0 1-.5.5H17v1h7.5a1.5 1.5 0 0 0 1.5-1.5V14h-1z',
              fill: '#C94F60',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M17 12h7.5a1.5 1.5 0 0 1 1.5 1.5V15h-9v-3z',
              fill: '#E08095',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
