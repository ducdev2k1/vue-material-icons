import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StreamRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm7.89 14.65-2.94 2.93c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l2.94-2.93c.39-.38.39-1.02 0-1.41a.996.996 0 0 0-1.41 0M6.41 4.94a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l2.93 2.94c.39.39 1.02.39 1.42 0 .38-.39.38-1.02-.01-1.41zm9.71 9.71c-.39-.39-1.02-.39-1.42 0-.39.39-.39 1.02 0 1.41L17.64 19c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41zm-.06-5.32 2.99-2.98c.39-.4.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-2.99 2.98c-.39.39-.39 1.02 0 1.42.39.39 1.02.39 1.41 0',
        props,
        attrs
      );
  },
});