import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EscalatorWarningSharpIcon',
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
              d: 'M6.5 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m9 7.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5m-1.29 3.36-.92 1.32L9.72 8c-.35-.62-1.01-1-1.73-1H3v8h1.5v7h5V11.61L12.03 16h2.2l.77-1.1V22h4v-5h1v-5h-4.15c-.66 0-1.27.32-1.64.86',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
