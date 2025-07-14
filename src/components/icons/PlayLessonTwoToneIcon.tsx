import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlayLessonTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 4v7L9.5 9.5 7 11V4H5v16h6.29c-.19-.63-.29-1.3-.29-2 0-3.53 2.61-6.43 6-6.92V4z',
        props,
        attrs
      );
  },
});