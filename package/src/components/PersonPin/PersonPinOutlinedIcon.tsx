import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PersonPinOutlinedIcon',
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
              d: 'M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14zm-7-7c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m6 8.58c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V17h12zM8.48 15c.74-.51 2.23-1 3.52-1s2.78.49 3.52 1z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
