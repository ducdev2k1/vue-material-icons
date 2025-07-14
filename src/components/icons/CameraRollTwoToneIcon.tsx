import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CameraRollTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 5H9V3H7v2H4v15h8v-2h8V7h-8zm-1 12H9v-2h2zm0-7H9V8h2zm6-2h2v2h-2zm0 7h2v2h-2zm-4-7h2v2h-2zm0 7h2v2h-2z',
        props,
        attrs
      );
  },
});