import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NetworkLockedSharpIcon',
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
              d: 'M22 16v-.36c0-1.31-.94-2.5-2.24-2.63-1.5-.15-2.76 1.02-2.76 2.49v.5h-1v6h7v-6zm-1 0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5zm-1.5-5c.15 0 .3.01.46.02.01 0 .03.01.04.01V1L1 20h13v-6h1.26c.22-.63.58-1.2 1.06-1.68.85-.85 1.98-1.32 3.18-1.32',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
