import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FireHydrantAltTwoToneIcon',
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
              d: 'M12 4c-1.47 0-2.75.81-3.44 2h6.89c-.7-1.19-1.98-2-3.45-2',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
