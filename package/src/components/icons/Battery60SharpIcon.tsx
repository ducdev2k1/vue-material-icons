import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Battery60SharpIcon',
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
              fillOpacity: '.3',
              d: 'M17 4h-3V2h-4v2H7v7h10V4z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M7 11v11h10V11H7z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
