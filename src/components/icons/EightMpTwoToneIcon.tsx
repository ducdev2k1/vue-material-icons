import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EightMpTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M15 14h1.5v1.5H15zm-3.5-7.5H13V8h-1.5zm0 2.5H13v1.5h-1.5z',
        props,
        attrs
      );
  },
});