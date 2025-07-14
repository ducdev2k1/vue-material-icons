import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RecordVoiceOverTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M9 17c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2',
        props,
        attrs
      );
  },
});