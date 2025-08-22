import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FilterTwoToneIcon',
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
              d: 'M7 17h14V3H7zm4.25-5.53 1.96 2.36 2.75-3.54L19.5 15h-11z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M1 21c0 1.1.9 2 2 2h16v-2H3V5H1zM21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 16H7V3h14zm-5.04-6.71-2.75 3.54-1.96-2.36L8.5 15h11z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
