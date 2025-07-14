import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EngineeringTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M9 11c1.1 0 2-.9 2-2H7c0 1.1.9 2 2 2M7.5 6c.28 0 .5-.22.5-.5V4.14c-.36.09-.69.23-1 .41v.95c0 .28.22.5.5.5m3 0c.28 0 .5-.22.5-.5v-.95c-.31-.18-.64-.32-1-.41V5.5c0 .28.22.5.5.5M9 17c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2',
        props,
        attrs
      );
  },
});