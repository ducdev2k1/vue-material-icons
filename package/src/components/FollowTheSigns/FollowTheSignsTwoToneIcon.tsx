import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FollowTheSignsTwoToneIcon',
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
              d: 'M17.64 7.75V6h-3.51V4.5h3.51V2.75l2.49 2.5z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
