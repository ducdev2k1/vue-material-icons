import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormatTextdirectionLToRTwoToneIcon',
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
              d: 'M9 8V4c-1.1 0-2 .9-2 2s.9 2 2 2',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4m0-6v4c-1.1 0-2-.9-2-2s.9-2 2-2m12 14-4-4v3H5v2h12v3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
