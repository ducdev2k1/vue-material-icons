import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LocalMallRoundedIcon',
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
              d: 'M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3m0 10c-2.33 0-4.29-1.59-4.84-3.75-.17-.63.32-1.25.97-1.25.47 0 .85.34.98.8.35 1.27 1.51 2.2 2.89 2.2s2.54-.93 2.89-2.2c.13-.46.51-.8.98-.8.65 0 1.13.62.97 1.25C16.29 11.41 14.33 13 12 13',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
