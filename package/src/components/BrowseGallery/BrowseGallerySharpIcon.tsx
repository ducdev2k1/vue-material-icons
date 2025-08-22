import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BrowseGallerySharpIcon',
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
              d: 'M9 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9m2.79 13.21L8 12.41V7h2v4.59l3.21 3.21z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M17.99 3.52v2.16C20.36 6.8 22 9.21 22 12s-1.64 5.2-4.01 6.32v2.16C21.48 19.24 24 15.91 24 12s-2.52-7.24-6.01-8.48',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
