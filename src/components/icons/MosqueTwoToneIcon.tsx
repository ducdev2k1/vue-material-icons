import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MosqueTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M9.91 9h4.18C15.14 9 16 8.14 16 7.09c0-.64-.32-1.23-.85-1.59L12 3.4 8.85 5.5c-.53.36-.85.95-.85 1.59C8 8.14 8.86 9 9.91 9M17 11H7v4H3v4h6v-2c0-1.65 1.35-3 3-3s3 1.35 3 3v2h6v-4h-4z',
        props,
        attrs
      );
  },
});