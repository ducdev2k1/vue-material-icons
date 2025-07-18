import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SmsFailedTwoToneIcon',
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
              d: 'M4 17.17 5.17 16H20V4H4zM11 6h2v4h-2zm0 6h2v2h-2z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
