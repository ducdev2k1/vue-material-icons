import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ToysTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M18 12H6c-1.1 0-2 .9-2 2 0 .51.2.97.51 1.32C5.05 14.53 5.97 14 7 14c1.3 0 2.4.84 2.82 2h4.37c.41-1.16 1.51-2 2.82-2 1.03 0 1.95.53 2.49 1.32.3-.35.5-.81.5-1.32 0-1.1-.9-2-2-2',
        props,
        attrs
      );
  },
});