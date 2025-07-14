import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Filter2TwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M7 17h14V3H7zm4-6c0-1.11.9-2 2-2h2V7h-4V5h4c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2h-2v2h4v2h-6z',
        props,
        attrs
      );
  },
});