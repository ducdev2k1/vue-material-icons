import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EditNoteSharpIcon',
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
              d: 'M3 10h11v2H3zm0-2h11V6H3zm0 8h7v-2H3zm15.01-3.13 1.41-1.41 2.12 2.12-1.41 1.41zm-.71.71-5.3 5.3V21h2.12l5.3-5.3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
