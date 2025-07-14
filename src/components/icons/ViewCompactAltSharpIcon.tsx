import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ViewCompactAltSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M22 4H2v16h20zM11.5 16.5h-4v-4h4zm0-5h-4v-4h4zm5 5h-4v-4h4zm0-5h-4v-4h4z',
        props,
        attrs
      );
  },
});