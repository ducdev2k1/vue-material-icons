import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ForestIcon',
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
              d: 'M16 12 9 2 2 12h1.86L0 18h7v4h4v-4h7l-3.86-6z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20.14 12H22L15 2l-2.39 3.41L17.92 13h-1.95l3.22 5H24zM13 19h4v3h-4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
