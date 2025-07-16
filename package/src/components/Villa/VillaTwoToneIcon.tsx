import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VillaTwoToneIcon',
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
              d: 'm5 9.37 9-3.46V12H9v7H5zM19 19h-3v-3h-2v3h-3v-5h8z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
