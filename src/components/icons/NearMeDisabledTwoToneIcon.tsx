import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NearMeDisabledTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm16.1 10.44 1.5-4.05-4.05 1.5zm-1.53 4.13L9.43 9.43l-2.71 1.01 4.89 1.95 1.95 4.89z',
        props,
        attrs
      );
  },
});