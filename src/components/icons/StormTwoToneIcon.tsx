import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StormTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M17.2 9C15.54 6.13 11.86 5.15 9 6.8c-2.67 1.54-3.7 4.84-2.5 7.6q.135.3.3.6c1.66 2.87 5.33 3.85 8.2 2.2 2.67-1.54 3.7-4.84 2.5-7.6q-.135-.3-.3-.6M12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4',
        props,
        attrs
      );
  },
});