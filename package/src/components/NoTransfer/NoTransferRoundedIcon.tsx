import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoTransferRoundedIcon',
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
              d: 'M5.78 2.95C7.24 2.16 9.48 2 12 2c4.42 0 8 .5 8 4v10c0 .35-.08.67-.19.98L13.83 11H18V6H8.83zM20.49 21.9c-.39.39-1.02.39-1.41 0l-1.01-1.01c-.18.07-.37.11-.57.11-.83 0-1.5-.68-1.5-1.5V19H8v.5c0 .83-.67 1.5-1.5 1.5S5 20.33 5 19.5v-1.28c-.61-.55-1-1.34-1-2.22V6.83l-1.9-1.9a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l16.97 16.97c.4.39.4 1.02.01 1.41M9 15.5c0-.83-.67-1.5-1.5-1.5S6 14.67 6 15.5 6.67 17 7.5 17 9 16.33 9 15.5M8.17 11 6 8.83V11z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
