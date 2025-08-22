import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BedroomChildSharpIcon',
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
              d: 'M9 8.5h6v2H9zM7.51 12h9v2h-9z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M22 2H2v20h20zm-4 15h-1.5v-1.5h-9V17H6v-6.32l1.5-.01V7h9v3.67H18z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
