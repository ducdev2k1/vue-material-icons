import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MapsUgcRoundedIcon',
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
              d: 'M12 4c4.97 0 8.9 4.56 7.82 9.72-.68 3.23-3.4 5.74-6.67 6.2-1.59.22-3.14-.01-4.58-.7-.27-.13-.56-.19-.86-.19-.19 0-.38.03-.56.08l-2.31.68c-.38.11-.74-.24-.63-.63l.7-2.39c.13-.45.07-.92-.14-1.35C4.26 14.34 4 13.18 4 12c0-4.41 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29l-1.46 4.96c-.22.75.49 1.46 1.25 1.23l4.96-1.46c1.66.79 3.56 1.15 5.58.89 4.56-.59 8.21-4.35 8.66-8.92C22.53 7.03 17.85 2 12 2',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
