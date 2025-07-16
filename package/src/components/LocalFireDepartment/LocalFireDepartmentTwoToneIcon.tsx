import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LocalFireDepartmentTwoToneIcon',
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
              d: 'M16.2 8.65c-.64.42-1.4.65-2.18.65-2.06 0-3.77-1.55-3.99-3.55C8.13 7.35 6 9.84 6 13c0 1.79.79 3.4 2.04 4.5-.04-.34-.23-1.88 1.13-3.22L12 11.5l2.83 2.78c1.35 1.33 1.17 2.86 1.13 3.21v.01C17.21 16.4 18 14.79 18 13c0-1.65-.66-3.22-1.8-4.35',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
