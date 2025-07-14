import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RestoreFromTrashTwoToneIcon',
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
              d: 'M16 14h-2v4h-4v-4H8v5h8zm0 0V9H8v5l4-4z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
