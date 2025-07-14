import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NearbyErrorRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'm11.29 8.28-3.01 3.01c-.39.39-.39 1.02 0 1.41l3.01 3.01c.39.39 1.02.39 1.41 0l3.01-3.01c.39-.39.39-1.02 0-1.41L12.7 8.28c-.38-.39-1.02-.39-1.41 0',
        props,
        attrs
      );
  },
});