import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DirectionsBoatFilledTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm19.77 12.66-1.12 3.97c-.78-.43-1.07-.86-2.65-2.67-1.6 1.82-2.43 3.04-4 3.04-1.53 0-2.34-1.15-4-3.04-1.6 1.82-1.87 2.21-2.65 2.65l-1.13-3.96L12 10.11z',
        props,
        attrs
      );
  },
});