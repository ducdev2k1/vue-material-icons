import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommitSharpIcon',
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
              d: 'M16.9 11c-.46-2.28-2.48-4-4.9-4s-4.44 1.72-4.9 4H2v2h5.1c.46 2.28 2.48 4 4.9 4s4.44-1.72 4.9-4H22v-2zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
