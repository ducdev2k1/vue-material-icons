import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CleanHandsTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M9.24 9.5H7.42C7.94 8.61 8.89 8 10 8c1.62 0 2.94 1.29 2.99 2.9zM5 20v-7H3v7zm14.9-1.43c-.16-.33-.51-.56-.9-.56h-5.35c-.54 0-1.07-.09-1.58-.26l-2.38-.79.63-1.9 2.38.79c.31.1 2.3.15 2.3.15 0-.37-.23-.7-.57-.83L8.61 13H7v5.48l6.97 1.93z',
        props,
        attrs
      );
  },
});