import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DisabledVisibleTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M17 15c-1.95 0-3.76.98-4.75 2.5.99 1.52 2.8 2.5 4.75 2.5s3.76-.98 4.75-2.5c-.99-1.52-2.8-2.5-4.75-2.5m0 4c-.83 0-1.5-.67-1.5-1.5S16.17 16 17 16s1.5.67 1.5 1.5S17.83 19 17 19',
        props,
        attrs
      );
  },
});