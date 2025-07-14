import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RailwayAlertOutlinedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M4 11V8h7.29C11.1 7.37 11 6.7 11 6H4.43c.9-.77 3.28-1.08 6.65-.98.1-.7.3-1.37.59-1.99C2.97 2.67 2 5.02 2 7v9.5C2 18.43 3.57 20 5.5 20L4 21v1h12v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V13c-1.91 0-3.63-.76-4.89-2zm12 5.5c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5V13h12z',
        props,
        attrs
      );
  },
});