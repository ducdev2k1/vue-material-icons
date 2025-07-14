import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OnDeviceTrainingOutlinedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M11 16h2v1h-2zm1-5c-1.1 0-2 .9-2 2 0 .74.4 1.38 1 1.72v.78h2v-.78c.6-.35 1-.98 1-1.72 0-1.1-.9-2-2-2',
        props,
        attrs
      );
  },
});