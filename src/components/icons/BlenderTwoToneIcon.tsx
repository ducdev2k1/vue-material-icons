import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlenderTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M13 16h-2c-1.65 0-3 1.35-3 3v1h8v-1c0-1.65-1.35-3-3-3m-1 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
        props,
        attrs
      );
  },
});