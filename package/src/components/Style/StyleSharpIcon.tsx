import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StyleSharpIcon',
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
              d: 'M3.87 20.21v-9.03l-3.19 7.7zm18.92-2.43L16.31 2.14 5.26 6.71l6.48 15.64zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-2 13h3.45l-3.45-8.34z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
