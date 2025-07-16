import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MailLockSharpIcon',
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
              d: 'M22 9.97V4H2.01L2 20h14v-5.03c0-2.76 2.24-5 5-5zM20 8l-8 5-8-5V6l8 5 8-5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
