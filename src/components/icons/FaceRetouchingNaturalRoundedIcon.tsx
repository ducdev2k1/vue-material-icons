import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FaceRetouchingNaturalRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M22.01 4.05 20.6 3.4l-.65-1.41c-.18-.39-.73-.39-.91 0L18.4 3.4l-1.41.65c-.39.18-.39.73 0 .91l1.41.64.65 1.41c.18.39.73.39.91 0l.64-1.41 1.41-.65c.39-.17.39-.73 0-.9',
        props,
        attrs
      );
  },
});