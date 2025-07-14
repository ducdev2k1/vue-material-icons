import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ViewInArTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'm13 17.17 4-2.3v-4.63l-4 2.33zM12 6.25 8.04 8.53 12 10.84l3.96-2.31zm-5 8.62 4 2.3v-4.6l-4-2.33z',
        props,
        attrs
      );
  },
});