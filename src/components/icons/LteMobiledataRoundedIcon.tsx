import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LteMobiledataRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M6 14h2c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1zm4-4h1v5c0 .55.45 1 1 1s1-.45 1-1v-5h1c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1m11-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1h-2v-1h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-1h2c.55 0 1-.45 1-1',
        props,
        attrs
      );
  },
});