import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AirlineSeatFlatTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M5 11c.27 0 .52-.11.71-.3.39-.4.39-1.02-.01-1.41C5.51 9.11 5.26 9 5 9c-.27 0-.52.11-.71.3-.39.4-.39 1.02.01 1.41.19.18.44.29.7.29m13-2h-7v2h9c0-1.1-.9-2-2-2',
        props,
        attrs
      );
  },
});