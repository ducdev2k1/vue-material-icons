import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PanoramaPhotosphereSharpIcon',
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
              d: 'M23 8.84c-.54-.43-1.23-.81-1.99-1.15C19.4 4.33 15.98 2 12 2S4.6 4.33 2.99 7.68c-.76.35-1.45.72-1.99 1.16v6.33c.54.43 1.23.81 1.99 1.15C4.6 19.67 8.02 22 12 22s7.4-2.33 9.01-5.68c.76-.34 1.45-.72 1.99-1.15zM12 4c2.37 0 4.49 1.04 5.95 2.68C16.17 6.25 14.15 6 12 6s-4.17.25-5.95.68C7.51 5.04 9.63 4 12 4m0 16c-2.37 0-4.49-1.04-5.95-2.68 1.78.43 3.8.68 5.95.68s4.17-.25 5.95-.68C16.49 18.96 14.37 20 12 20',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
