import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FireHydrantAltIcon',
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
              d: 'M19 11h-1V8h2V6h-2.35c-.82-2.33-3.04-4-5.65-4S7.17 3.67 6.35 6H4v2h2v3H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v3H4v2h16v-2h-2v-3h1c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2m-7 6.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
