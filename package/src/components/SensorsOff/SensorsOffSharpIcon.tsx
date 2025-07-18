import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SensorsOffSharpIcon',
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
              d: 'M8.14 10.96c-.09.33-.14.68-.14 1.04 0 1.1.45 2.1 1.17 2.83l-1.42 1.42C6.67 15.16 6 13.66 6 12c0-.93.21-1.8.58-2.59L5.11 7.94C4.4 9.13 4 10.52 4 12c0 2.21.9 4.21 2.35 5.65l-1.42 1.42C3.12 17.26 2 14.76 2 12c0-2.04.61-3.93 1.66-5.51L1.39 4.22 2.8 2.81l18.38 18.38-1.41 1.41zm9.28 3.63c.37-.79.58-1.66.58-2.59 0-1.66-.67-3.16-1.76-4.24l-1.42 1.42C15.55 9.9 16 10.9 16 12c0 .36-.05.71-.14 1.04zM20 12c0 1.48-.4 2.87-1.11 4.06l1.45 1.45C21.39 15.93 22 14.04 22 12c0-2.76-1.12-5.26-2.93-7.07l-1.42 1.42C19.1 7.79 20 9.79 20 12',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
