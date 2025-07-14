import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FactoryTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 12V9.95l-5 2V10l-3 1.32V20h16v-8zm-3 6H7v-4h2zm4 0h-2v-4h2zm4 0h-2v-4h2z',
        props,
        attrs
      );
  },
});