import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Battery50SharpIcon',
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
              d: 'M17 4h-3V2h-4v2H7v9h10V4z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M7 13v9h10v-9H7z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
