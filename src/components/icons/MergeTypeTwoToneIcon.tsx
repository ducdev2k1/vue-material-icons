import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MergeTypeTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8H11v5.59zm11.407 1.41-3.408-3.407 1.4-1.407 3.41 3.408z',
        props,
        attrs
      );
  },
});