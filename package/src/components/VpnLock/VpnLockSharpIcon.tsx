import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VpnLockSharpIcon',
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
              d: 'M19 13c0 2.08-.8 3.97-2.1 5.39V17H14v-4H7v-2h3V8h4V3.46c-.95-.3-1.95-.46-3-.46C5.48 3 1 7.48 1 13s4.48 10 10 10 10-4.48 10-10c0-.34-.02-.67-.05-1h-2.03c.04.33.08.66.08 1m-9 7.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L8 16v3h2zM22 4v-.36c0-1.31-.94-2.5-2.24-2.63C18.26.86 17 2.03 17 3.5V4h-1v6h7V4zm-1 0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
