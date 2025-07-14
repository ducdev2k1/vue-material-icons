import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DatasetLinkedTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M5 5v14h3.09c-.05-.33-.09-.66-.09-1s.04-.67.09-1H7v-4h3.69c.95-.63 2.09-1 3.31-1h5V5zm6 6H7V7h4zm2 0V7h4v4z',
        props,
        attrs
      );
  },
});