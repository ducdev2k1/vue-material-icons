import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WhatshotTwoToneIcon',
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
              d: 'M16.11 6.77c-.53 2.6-2.62 4.43-5.28 4.43-1.56 0-2.96-.62-3.97-1.63C6.3 10.96 6 12.47 6 14c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.56-.66-5.03-1.89-7.23m-4.22 11.22c-1.37 0-2.49-1.08-2.49-2.42 0-1.25.81-2.13 2.17-2.41 1.37-.28 2.78-.93 3.57-1.99.3 1 .46 2.05.46 3.12 0 2.04-1.66 3.7-3.71 3.7',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
