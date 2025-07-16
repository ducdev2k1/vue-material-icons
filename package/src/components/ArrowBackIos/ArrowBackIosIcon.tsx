import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ArrowBackIosIcon',
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
              d: 'M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
