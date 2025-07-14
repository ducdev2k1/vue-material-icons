import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddLocationAltTwoToneIcon',
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
              fillOpacity: '.3',
              d: 'M14 4.8V7h3v3h1.41q.09.585.09 1.2c0 2.57-2.1 5.79-6.16 9.51l-.34.3-.34-.31C7.6 16.99 5.5 13.77 5.5 11.2c0-3.84 2.82-6.7 6.5-6.7.7 0 1.37.1 2 .3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
