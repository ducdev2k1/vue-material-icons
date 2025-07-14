import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CarRentalTwoToneIcon',
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
              d: 'M7 15.01V18h10v-3H7zm8 .49c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
