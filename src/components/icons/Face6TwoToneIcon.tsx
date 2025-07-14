import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Face6TwoToneIcon',
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
              d: 'M6.55 7.66C7.06 6.64 8.09 6 9.24 6h5.53c1.14 0 2.17.64 2.68 1.66.94 1.87 1.66 2.08 2.26 2.24C18.78 6.51 15.68 4 12 4S5.22 6.51 4.29 9.9c.68-.18 1.33-.38 2.26-2.24',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
