import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ZoomInMapSharpIcon',
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
              d: 'M9 9V3H7v2.59L3.91 2.5 2.5 3.91 5.59 7H3v2zm12 0V7h-2.59l3.09-3.09-1.41-1.41L17 5.59V3h-2v6zM3 15v2h2.59L2.5 20.09l1.41 1.41L7 18.41V21h2v-6zm12 0v6h2v-2.59l3.09 3.09 1.41-1.41L18.41 17H21v-2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
