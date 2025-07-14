import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DinnerDiningTwoToneIcon',
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
              d: 'M17.08 15.14C16.41 14.4 15.49 14 14.5 14c-1.35 0-2.58.79-3.16 2h6.32c-.14-.31-.34-.6-.58-.86',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
