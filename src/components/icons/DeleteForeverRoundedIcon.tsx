import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DeleteForeverRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm3.17-6.41a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L12 12.59l1.41-1.41c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41L13.41 14l1.41 1.41c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L12 15.41l-1.41 1.41c-.39.39-1.02.39-1.41 0a.996.996 0 0 1 0-1.41L10.59 14zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1',
        props,
        attrs
      );
  },
});