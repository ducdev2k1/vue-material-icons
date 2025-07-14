import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BroadcastOnPersonalTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M4 10v9h5.59c-.38-.93-.59-1.94-.59-3 0-3.39 2.11-6.27 5.08-7.44L10 5.5z',
        props,
        attrs
      );
  },
});