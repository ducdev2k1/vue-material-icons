import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LabelImportantTwoToneIcon',
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
              d: 'M15 7H7.89l3.57 5-3.57 5H15l3.55-5z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M16.63 5.84C16.27 5.33 15.67 5 15 5H4l5 7-5 6.99h11c.67 0 1.27-.32 1.63-.83L21 12zM15 17H7.89l3.57-5-3.57-5H15l3.55 5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
