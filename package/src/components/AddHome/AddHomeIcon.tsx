import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddHomeIcon',
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
              d: 'M18 11c.7 0 1.37.1 2 .29V9l-8-6-8 6v12h7.68c-.43-.91-.68-1.92-.68-3 0-3.87 3.13-7 7-7',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
