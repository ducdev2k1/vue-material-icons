import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VideogameAssetTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        [
          {
            tag: 'path',
            props: {
              d: 'M3 16h18V8H3zm15.5-7c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5m-4 3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M4 11h2V9h2v2h2v2H8v2H6v-2H4z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 10H3V8h18zM6 15h2v-2h2v-2H8V9H6v2H4v2h2z',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '14.5',
              cy: '13.5',
              r: '1.5',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '18.5',
              cy: '10.5',
              r: '1.5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
