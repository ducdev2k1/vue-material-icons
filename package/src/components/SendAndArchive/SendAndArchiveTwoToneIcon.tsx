import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SendAndArchiveTwoToneIcon',
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
              d: 'M5 7.01v3.49l6 1.5-6 1.5v3.49l5.39-2.27c.6-1.74 1.86-3.16 3.48-3.97z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
