import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ViewCarouselRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M3 7h2c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1m5 12h8c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1M19 7h2c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1',
        props,
        attrs
      );
  },
});