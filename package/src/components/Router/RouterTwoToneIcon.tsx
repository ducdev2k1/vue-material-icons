import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RouterTwoToneIcon',
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
              d: 'M15 15H5v4h14v-4zm-7 3H6v-2h2zm3.5 0h-2v-2h2zm3.5 0h-2v-2h2z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
