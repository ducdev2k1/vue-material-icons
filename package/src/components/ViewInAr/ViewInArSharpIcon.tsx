import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ViewInArSharpIcon',
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
              d: 'M18 1v2h3v3h2V1zm3 20h-3v2h5v-5h-2zM3 3h3V1H1v5h2zm0 15H1v5h5v-2H3zM19 7.97l-7-4.03-7 4.03v8.06l7 4.03 7-4.03zm-8 9.2-4-2.3v-4.63l4 2.33zm1-6.33L8.04 8.53 12 6.25l3.96 2.28zm5 4.03-4 2.3v-4.6l4-2.33z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
