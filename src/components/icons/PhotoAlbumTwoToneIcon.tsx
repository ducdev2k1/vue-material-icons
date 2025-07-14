import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PhotoAlbumTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M16 4v7l-2.5-1.5L11 11V4H6v16h12V4zM7 18l2.38-3.17L11 17l2.62-3.5L17 18z',
        props,
        attrs
      );
  },
});