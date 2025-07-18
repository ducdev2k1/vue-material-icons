import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PhotoSizeSelectSmallSharpIcon',
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
              d: 'M23 15h-2v2h2zm0 4h-2v2h2zm0-8h-2v2h2zm-8-8h-2v2h2zm8 4h-2v2h2zM1 21h10v-6H1zM3 7H1v2h2zm12 12h-2v2h2zm4-16h-2v2h2zm4 0h-2v2h2zm-4 16h-2v2h2zM3 11H1v2h2zm8-8H9v2h2zM7 3H5v2h2zM3 3H1v2h2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
