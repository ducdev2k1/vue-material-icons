import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SdSharpIcon',
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
              d: 'M2 4v16h20V4zm11 5h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4zm-3.5 4.5v-1H6V9h5v2H9.5v-.5h-2v1H11V15H6v-2h1.5v.5zm5 0h2v-3h-2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
