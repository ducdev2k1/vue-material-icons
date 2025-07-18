import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BungalowTwoToneIcon',
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
              d: 'm12 6.78-3 4.8V19h2v-3h2v3h2v-7.42zM13 14h-2v-2h2z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
