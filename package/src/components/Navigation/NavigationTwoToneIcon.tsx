import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavigationTwoToneIcon',
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
              d: 'm7.72 17.7 3.47-1.53.81-.36.81.36 3.47 1.53L12 7.27z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
