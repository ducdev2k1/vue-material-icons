import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LinkedCameraRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M16.6 2.37c2.1.27 3.77 1.93 4.03 4.03.04.34.32.6.66.6.39 0 .71-.34.66-.73-.33-2.72-2.5-4.89-5.22-5.22-.39-.05-.73.27-.73.66 0 .34.26.62.6.66m2.63 3.82a3.338 3.338 0 0 0-2.42-2.42c-.41-.1-.81.22-.81.65 0 .29.19.57.48.64.72.18 1.29.74 1.46 1.46.07.29.34.48.64.48.43 0 .75-.4.65-.81',
        props,
        attrs
      );
  },
});