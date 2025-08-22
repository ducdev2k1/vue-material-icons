import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LivingSharpIcon',
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
              d: 'M15.5 12v2.5h-7V12h-2v4.5h11V12z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M10 10v3h4v-3l2.25-.01V7.5h-8.5v2.49z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M22 2H2v20h20zm-3 7.99V18H5v-8l1.25-.01V6h11.5v3.99z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
