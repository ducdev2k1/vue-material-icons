import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModeNightTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M9.5 4c-.34 0-.68.02-1.01.07C10.4 6.23 11.5 9.05 11.5 12s-1.1 5.77-3.01 7.93c.33.05.67.07 1.01.07 4.41 0 8-3.59 8-8s-3.59-8-8-8',
        props,
        attrs
      );
  },
});