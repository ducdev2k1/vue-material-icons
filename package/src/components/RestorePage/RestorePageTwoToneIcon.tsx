import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RestorePageTwoToneIcon',
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
              d: 'M6 4v16h12V8.83L13.17 4zm10.72 9c0 2.48-2.02 4.5-4.5 4.5-1.84 0-3.43-1.12-4.12-2.7h1.54c.57.81 1.51 1.35 2.58 1.35 1.74 0 3.15-1.41 3.15-3.15s-1.41-3.15-3.15-3.15c-1.21 0-2.27.7-2.79 1.71L10.88 13h-3.6V9.4l1.17 1.17c.8-1.24 2.19-2.07 3.78-2.07 2.48 0 4.49 2.02 4.49 4.5',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
