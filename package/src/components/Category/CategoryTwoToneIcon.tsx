import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CategoryTwoToneIcon',
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
            tag: 'circle',
            props: {
              cx: '17.5',
              cy: '17.5',
              r: '2.5',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M5 15.5h4v4H5zm7-9.66L10.07 9h3.86z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm12 2-5.5 9h11zm0 3.84L13.93 9h-3.87zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5m0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5M11 13.5H3v8h8zm-2 6H5v-4h4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
