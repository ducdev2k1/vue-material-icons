import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ForwardToInboxSharpIcon',
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
              d: 'M22 4H2v16h11v-2H4V8l8 5 8-5v5h2zm-10 7L4 6h16zm7 4 4 4-4 4v-3h-4v-2h4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
