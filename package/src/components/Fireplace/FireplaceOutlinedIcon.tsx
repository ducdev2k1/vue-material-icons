import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FireplaceOutlinedIcon',
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
              d: 'M12.01 12.46c-.15.42-.15.82-.08 1.28.1.55.33 1.04.2 1.6-.13.59-.77 1.38-1.53 1.63 1.28 1.05 3.2.37 3.39-1.32.17-1.54-1.44-1.98-1.98-3.19',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
