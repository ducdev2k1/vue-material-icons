import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UpcomingSharpIcon',
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
              d: 'm21.16 7.26-1.41-1.41-3.56 3.55 1.41 1.41s3.45-3.52 3.56-3.55M11 3h2v5h-2zm-4.6 7.81L7.81 9.4 4.26 5.84 2.84 7.26c.11.03 3.56 3.55 3.56 3.55M22 12h-7c0 1.66-1.34 3-3 3s-3-1.34-3-3H2v9h20z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
