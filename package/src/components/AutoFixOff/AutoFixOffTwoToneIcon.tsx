import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AutoFixOffTwoToneIcon',
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
              d: 'm4.4169 18.1737 5.4659-5.4659 1.4142 1.4142-5.466 5.466z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
