import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EarbudsTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M7 6c0-.55-.45-1-1-1s-1 .45-1 1v1h1c.55 0 1-.45 1-1m10 12c0 .55.45 1 1 1s1-.45 1-1v-1h-1c-.55 0-1 .45-1 1',
        props,
        attrs
      );
  },
});