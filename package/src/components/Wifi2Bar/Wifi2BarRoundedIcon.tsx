import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Wifi2BarRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        [
          {
            tag: 'path',
            props: {
              d: 'M12 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6.62-1.63c-.63-.63-.59-1.71.13-2.24C7.33 10.79 9.57 10 12 10s4.67.79 6.49 2.13c.72.53.76 1.6.13 2.24-.53.54-1.37.57-1.98.12C15.33 13.55 13.73 13 12 13s-3.33.55-4.64 1.49c-.61.44-1.45.41-1.98-.12',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
