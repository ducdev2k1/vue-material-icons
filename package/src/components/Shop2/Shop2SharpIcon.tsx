import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Shop2SharpIcon',
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
              d: 'M3 9H1v13h18v-2H3z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M18 5V1h-8v4H5v13h18V5zm-6-2h4v2h-4zm0 12V8l5.5 3.5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
