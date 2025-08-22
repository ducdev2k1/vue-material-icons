import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StoreTwoToneIcon',
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
              d: 'm5.64 9-.6 3h13.92l-.6-3z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M4 4h16v2H4zm16 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2zm-8 11H6v-4h6zm-6.96-6 .6-3h12.72l.6 3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
