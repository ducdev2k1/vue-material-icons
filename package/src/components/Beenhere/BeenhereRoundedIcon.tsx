import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BeenhereRoundedIcon',
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
              d: 'M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66l7.57 5.04c.34.22.77.22 1.11 0l7.56-5.04c.53-.36.88-.97.88-1.66V3c0-1.1-.9-2-2-2m-.7 6.7-7.59 7.59c-.39.39-1.02.39-1.41 0L5.71 11.7c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0L10 13.17l6.88-6.88c.39-.39 1.02-.39 1.41 0s.4 1.02.01 1.41',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
