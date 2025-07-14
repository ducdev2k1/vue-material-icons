import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlumbingSharpIcon',
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
              d: 'm16.16 5.64 3.54 3.54c1.17-1.17 1.17-3.07 0-4.24L16.16 1.4l-4.24 4.24 2.12 2.12zM4.842 12.7081l3.5355-3.5355 2.1213 2.1213-3.5355 3.5355z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
