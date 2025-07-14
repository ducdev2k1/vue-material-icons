import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LocalConvenienceStoreTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M14 14h2v4h4V9h-3V6H7v3H4v9h4v-4zm-1-7h1v2h1V7h1v5h-1v-2h-2zM8 9h2V8H8V7h3v3H9v1h2v1H8z',
        props,
        attrs
      );
  },
});