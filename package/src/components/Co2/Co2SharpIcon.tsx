import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Co2SharpIcon',
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
              d: 'M15 9h-5v6h5zm-1.5 4.5h-2v-3h2zM8 13v2H3V9h5v2H6.5v-.5h-2v3h2V13zm10.5 2.5v1h3V18H17v-3.5h3v-1h-3V12h4.5v3.5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
