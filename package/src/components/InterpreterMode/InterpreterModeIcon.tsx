import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InterpreterModeIcon',
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
              d: 'M20.5 16.5c-.83 0-1.5-.67-1.5-1.5v-2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V15c0 .83-.67 1.5-1.5 1.5M20 20h1v-1.54c1.69-.24 3-1.7 3-3.46h-1c0 1.38-1.12 2.5-2.5 2.5S18 16.38 18 15h-1c0 1.76 1.31 3.22 3 3.46zM9 12c-2.21 0-4-1.79-4-4s1.79-4 4-4c.47 0 .92.08 1.34.23C9.5 5.26 9 6.57 9 8s.5 2.74 1.34 3.77c-.42.15-.87.23-1.34.23m-1.89 1.13C5.79 14.05 5 15.57 5 17.22V20H1v-2.78c0-1.12.61-2.15 1.61-2.66 1.24-.64 2.76-1.19 4.5-1.43M11 8c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4m7.32 12c-1.67-.81-2.82-2.52-2.82-4.5 0-.89.23-1.73.64-2.45-.37-.03-.75-.05-1.14-.05-2.53 0-4.71.7-6.39 1.56-1 .51-1.61 1.54-1.61 2.66V20z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
