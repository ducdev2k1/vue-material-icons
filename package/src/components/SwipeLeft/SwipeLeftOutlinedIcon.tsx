import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SwipeLeftOutlinedIcon',
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
              d: 'm18.89 13.77-3.8-1.67c-.13-.06-.28-.1-.44-.1H14V7.5C14 6.12 12.88 5 11.5 5S9 6.12 9 7.5v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L4 17.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44c.15-.86-.29-1.72-1.08-2.12M17.08 21h-6.55l-3.7-3.78 4.17.89V7.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L18 15.56zM4.09 5.5H7V7H2V2h1.5v2.02C5.82 2.13 8.78 1 12 1c5.49 0 9.27 3.12 10 6h-1.57c-.76-1.98-3.69-4.5-8.43-4.5-3.03 0-5.79 1.14-7.91 3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
