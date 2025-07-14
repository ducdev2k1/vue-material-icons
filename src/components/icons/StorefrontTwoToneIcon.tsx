import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StorefrontTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M6.44 9.86 7.02 5H5.05L4.04 9.36c-.1.42-.01.84.25 1.17.14.18.44.47.94.47.61 0 1.13-.49 1.21-1.14M9.71 11c.74 0 1.29-.59 1.29-1.31V5H9.04l-.55 4.52c-.05.39.07.78.33 1.07.23.26.55.41.89.41m4.51 0c.41 0 .72-.15.96-.41.25-.29.37-.68.33-1.07L14.96 5H13v4.69c0 .72.55 1.31 1.22 1.31m4.69-6.01L16.98 5l.58 4.86c.08.65.6 1.14 1.21 1.14.49 0 .8-.29.93-.47.26-.33.35-.76.25-1.17z',
        props,
        attrs
      );
  },
});