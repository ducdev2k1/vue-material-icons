import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WifiProtectedSetupRoundedIcon',
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
              d: 'm16.7 5.3 1.44-1.44c.32-.32.09-.85-.35-.85H11.5c-.28 0-.5.22-.5.5V9.8c0 .45.54.67.85.35L13.3 8.7c1.97 1.46 3.25 3.78 3.25 6.42 0 .66-.08 1.31-.24 1.92-.12.5.48.86.84.49 1.48-1.53 2.4-3.61 2.4-5.91 0-2.51-1.11-4.76-2.85-6.32m-4.55 8.56L10.7 15.3c-1.97-1.46-3.25-3.78-3.25-6.42 0-.66.08-1.31.24-1.92.12-.5-.48-.86-.84-.49-1.48 1.53-2.4 3.61-2.4 5.91 0 2.52 1.1 4.77 2.84 6.33l-1.44 1.44c-.32.32-.09.85.35.85h6.29c.28 0 .5-.22.5-.5v-6.29c.01-.44-.53-.67-.84-.35',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
