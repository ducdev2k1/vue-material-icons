import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OutdoorGrillTwoToneIcon',
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
              d: 'M16.58 10H7.42c.77 1.76 2.54 3 4.58 3s3.81-1.24 4.58-3',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
