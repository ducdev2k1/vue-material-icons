import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FlipToBackIcon',
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
              d: 'M9 7H7v2h2zm0 4H7v2h2zm0-8c-1.11 0-2 .9-2 2h2zm4 12h-2v2h2zm6-12v2h2c0-1.1-.9-2-2-2m-6 0h-2v2h2zM9 17v-2H7c0 1.1.89 2 2 2m10-4h2v-2h-2zm0-4h2V7h-2zm0 8c1.1 0 2-.9 2-2h-2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5zm10-2h2V3h-2zm0 12h2v-2h-2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
