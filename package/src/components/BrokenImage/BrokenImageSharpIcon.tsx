import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BrokenImageSharpIcon',
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
              d: 'M21 3v8.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V3zm-3 8.42 3 3.01V21H3v-8.58l3 2.99 4-4 4 4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
