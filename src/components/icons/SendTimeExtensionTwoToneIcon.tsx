import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SendTimeExtensionTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 6V4c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2H5.01v2.13C7.17 8.94 8 11.01 8 12.5c0 1.5-.83 3.57-3 4.37V19h2.13c.71-1.93 2.44-2.8 3.87-2.97V8.76l2.89 1.45L18 12.26V6z',
        props,
        attrs
      );
  },
});