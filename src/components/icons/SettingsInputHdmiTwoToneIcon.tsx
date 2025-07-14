import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SettingsInputHdmiTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M8 9H7v3.53l2.79 5.58.21.42V20h4v-1.47l.21-.42L17 12.53V9h-1z',
        props,
        attrs
      );
  },
});