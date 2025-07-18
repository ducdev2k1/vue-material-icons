import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OfficeVsdxIcon',
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
              fill: '#185ABD',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M8.58 19.29c.24.667.38 1.087.42 1.26 0-.17.19-.62.44-1.34L11.31 14H13l-3.12 8h-1.8L5 14h1.74l1.84 5.29z',
              fill: '#fff',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M22.5 22h-3v-1h3a.5.5 0 0 0 .5-.5v-3h1v3a1.5 1.5 0 0 1-1.5 1.5z',
              fill: '#185ABD',
            },
          },
          {
            tag: 'path',
            props: {
              fill: '#41A5EE',
              d: 'M17 19h3v5h-3z',
            },
          },
          {
            tag: 'path',
            props: {
              fill: '#103F91',
              d: 'm20.5 15.503 2.998-2.998 2.998 2.998-2.998 2.998z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
