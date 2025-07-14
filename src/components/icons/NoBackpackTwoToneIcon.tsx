import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoBackpackTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M18 15.17V8c0-1.1-.9-2-2-2H8.83l6 6h1.67v1.67zM17.17 20l-6-6H7.5v-2h1.67L6 8.83V20z',
        props,
        attrs
      );
  },
});