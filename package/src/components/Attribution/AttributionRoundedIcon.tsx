import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AttributionRoundedIcon',
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
              d: 'M12 8.5c-.91 0-2.75.46-2.75 1.38V14c0 .28.22.5.5.5h1v3.25c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25V14.5h1c.28 0 .5-.22.5-.5V9.88c0-.91-1.84-1.38-2.75-1.38M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
