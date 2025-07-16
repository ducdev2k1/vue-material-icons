import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotificationsOffTwoToneIcon',
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
              d: 'M8 17h8v-.24L8.34 9.1C8.12 9.68 8 10.32 8 11zm4-10.5c-.19 0-.37.03-.55.06L16 11.1V11c0-2.48-1.51-4.5-4-4.5',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
