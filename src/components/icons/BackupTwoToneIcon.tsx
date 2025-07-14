import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BackupTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm19.21 12.04-1.53-.11-.3-1.5C16.88 7.86 14.62 6 12 6 9.94 6 8.08 7.14 7.12 8.96l-.5.95-1.07.11C3.53 10.24 2 11.95 2 14c0 2.21 1.79 4 4 4h13c1.65 0 3-1.35 3-3 0-1.55-1.22-2.86-2.79-2.96m-5.76.96v3h-2.91v-3H8l4-4 4 4z',
        props,
        attrs
      );
  },
});