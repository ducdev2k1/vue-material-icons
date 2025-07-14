import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Filter5TwoToneIcon',
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
              d: 'M7 17h14V3H7zm4-4h4v-2h-4V5h6v2h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2h-4z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
