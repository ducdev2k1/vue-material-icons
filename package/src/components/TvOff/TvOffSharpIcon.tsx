import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TvOffSharpIcon',
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
              d: 'M21 7v10.88l2 2V5h-9.58l3.29-3.3L16 1l-4 4-4-4-.7.7L10.58 5H8.12l2 2zM2.41 2.13l-.14.14L1 3.54l1.53 1.53H1V21h17.46l1.99 1.99 1.26-1.26.15-.15zM3 19V7h1.46l12 12z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
