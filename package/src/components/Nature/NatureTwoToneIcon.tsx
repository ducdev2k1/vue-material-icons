import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NatureTwoToneIcon',
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
              d: 'M12.17 4.17c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.25-5-5-5',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M19.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H5v2h14v-2h-6v-3.88h-.03c3.49-.4 6.2-3.36 6.2-6.95m-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.25 5-5 5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
