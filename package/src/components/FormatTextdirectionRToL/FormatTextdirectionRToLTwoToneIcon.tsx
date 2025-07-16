import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormatTextdirectionRToLTwoToneIcon',
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
              d: 'M8 6c0 1.1.9 2 2 2V4c-1.1 0-2 .9-2 2',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
