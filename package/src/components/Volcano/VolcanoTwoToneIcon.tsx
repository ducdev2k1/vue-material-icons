import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VolcanoTwoToneIcon',
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
              d: 'M16.49 10h-4.14l-1.49 3.74-.51 1.26H7.3l-2.22 5h14.27z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
