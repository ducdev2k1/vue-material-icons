import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MicOffTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 3.7c-.66 0-1.2.54-1.2 1.2v1.51l2.39 2.39.01-3.9c0-.66-.54-1.2-1.2-1.2',
        props,
        attrs
      );
  },
});