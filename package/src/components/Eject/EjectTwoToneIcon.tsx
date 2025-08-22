import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EjectTwoToneIcon',
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
              d: 'M12 8.6 9.07 13h5.86z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M5 17h14v2H5zm7-12L5.33 15h13.34zm0 3.6 2.93 4.4H9.07z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
