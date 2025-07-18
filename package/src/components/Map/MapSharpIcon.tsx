import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MapSharpIcon',
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
              d: 'M15 5.1 9 3 3 5.02v16.2l6-2.33 6 2.1 6-2.02V2.77zm0 13.79-6-2.11V5.11l6 2.11z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
