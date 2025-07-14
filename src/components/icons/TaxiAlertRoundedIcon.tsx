import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TaxiAlertRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M18 13c-1.91 0-3.63-.76-4.89-2h-8.3l1.04-3h5.44C11.1 7.37 11 6.7 11 6s.1-1.37.29-2H9c-.55 0-1 .45-1 1v1H5.5c-.66 0-1.21.42-1.42 1.01L2 13v7.5c0 .82.67 1.5 1.5 1.5S5 21.32 5 20.5V20h12v.5c0 .82.67 1.5 1.5 1.5s1.5-.68 1.5-1.5V13l-.09-.27c-.61.17-1.25.27-1.91.27M6.5 17c-.83 0-1.5-.67-1.5-1.5S5.67 14 6.5 14s1.5.67 1.5 1.5S7.33 17 6.5 17m9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
        props,
        attrs
      );
  },
});