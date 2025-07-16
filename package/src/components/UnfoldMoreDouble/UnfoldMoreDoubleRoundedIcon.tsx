import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UnfoldMoreDoubleRoundedIcon',
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
              d: 'M9.53 5.29 12 2.83l2.46 2.46c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L12.7.7a.996.996 0 0 0-1.41 0L8.12 3.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
