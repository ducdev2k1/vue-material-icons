import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RedeemTwoToneIcon',
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
              d: 'M4 17h16v2H4zm13-6.17L15.38 12 13 8.76 12 7.4l-1 1.36L8.62 12 7 10.83 9.08 8H4v6h16V8h-5.08z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
