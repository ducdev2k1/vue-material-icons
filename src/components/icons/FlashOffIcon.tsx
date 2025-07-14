import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FlashOffIcon',
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
              d: 'M3.27 3 2 4.27l5 5V13h3v9l3.58-6.14L17.73 20 19 18.73zM17 10h-4l4-8H7v2.18l8.46 8.46z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
