import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GridOnRoundedIcon',
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
              d: 'M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M8 20H5c-.55 0-1-.45-1-1v-3h4zm0-6H4v-4h4zm0-6H4V5c0-.55.45-1 1-1h3zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4zm5 12h-3v-4h4v3c0 .55-.45 1-1 1m1-6h-4v-4h4zm0-6h-4V4h3c.55 0 1 .45 1 1z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
