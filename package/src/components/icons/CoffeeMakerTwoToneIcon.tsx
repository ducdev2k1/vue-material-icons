import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CoffeeMakerTwoToneIcon',
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
              d: 'M13 19c1.65 0 3-1.35 3-3v-3h-6v3c0 1.65 1.35 3 3 3',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
