import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EditLocationAltRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M13.54 13H10c-.55 0-1-.45-1-1V8.46c0-.26.11-.52.29-.7l5.32-5.32C13.78 2.16 12.9 2 12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.44 6.92 7.33 11.22.38.33.96.33 1.34 0C17.56 17.12 20 13.37 20 10.2c0-1.01-.16-1.94-.45-2.8l-5.31 5.31c-.18.18-.44.29-.7.29',
        props,
        attrs
      );
  },
});