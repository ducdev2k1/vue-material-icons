import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PersonAddAlt1SharpIcon',
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
              d: 'M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4m2 2v2h3v3h2v-3h3v-2h-3V7h-2v3zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
