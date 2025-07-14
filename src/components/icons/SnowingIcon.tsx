import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SnowingIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M6 12.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M4.75 6a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m12 8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m0-8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m-9 12a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m0-8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m3 4a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m0-8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m3 12a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m0-8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0',
        props,
        attrs
      );
  },
});