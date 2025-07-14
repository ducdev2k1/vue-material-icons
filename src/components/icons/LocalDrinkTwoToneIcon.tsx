import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LocalDrinkTwoToneIcon',
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
              d: 'M7 20.01 17 20l1.1-10H5.89zm5-9.41s3 3.4 3 5.4c0 1.66-1.34 3-3 3s-3-1.34-3-3c0-2 3-5.4 3-5.4',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
