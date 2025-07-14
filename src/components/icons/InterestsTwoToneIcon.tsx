import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InterestsTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M7.02 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M19 19h-4v-4h4zM7 6.12 8.6 9H5.4zm10 2.23c-1.45-1.22-3-2.4-3-3.1 0-.43.35-.75.75-.75.31 0 .52.17.73.37L17 6.3l1.52-1.43c.21-.2.42-.37.73-.37.4 0 .75.32.75.75 0 .7-1.55 1.88-3 3.1',
        props,
        attrs
      );
  },
});