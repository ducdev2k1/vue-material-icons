import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PrivateConnectivityRoundedIcon',
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
              d: 'M22 12c0-.55-.45-1-1-1h-2.07c-.49-3.39-3.4-6-6.93-6s-6.44 2.61-6.93 6H3c-.55 0-1 .45-1 1s.45 1 1 1h2.07c.49 3.39 3.4 6 6.93 6s6.44-2.61 6.93-6H21c.55 0 1-.45 1-1m-7 2.5c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1v-1c0-1.21 1.08-2.18 2.34-1.97.98.16 1.66 1.08 1.66 2.08v.89c.55 0 1 .45 1 1zM12.75 13c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75M13 9.5v1h-2v-1c0-.55.45-1 1-1s1 .45 1 1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
