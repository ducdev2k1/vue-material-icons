import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LaptopChromebookTwoToneIcon',
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
              d: 'M4 5h16v10H4z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M22 18V3H2v15H0v2h24v-2zm-8 0h-4v-1h4zm6-3H4V5h16z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
