import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PanToolAltOutlinedIcon',
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
              d: 'm18.89 11.77-3.8-1.67c-.13-.06-.28-.1-.44-.1H14V5.5C14 4.12 12.88 3 11.5 3S9 4.12 9 5.5v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L4 15.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44c.15-.86-.29-1.72-1.08-2.12M17.08 19h-6.55l-3.7-3.78 4.17.89V5.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L18 13.56z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
