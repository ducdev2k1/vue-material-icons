import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LocalPoliceSharpIcon',
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
              d: 'm14.5 12.59.9 3.88-3.4-2.05-3.4 2.05.9-3.87-3-2.59 3.96-.34L12 6.02l1.54 3.64 3.96.34zM3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
