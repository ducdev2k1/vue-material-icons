import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ElevenMpSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M3 3v18h18V3zm5 2.5h3v6H9.5V7H8zm4.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zm.5-13h3v6h-1.5V7H13zM18 17h-3v1.5h-1.5v-6H18z',
        props,
        attrs
      );
  },
});