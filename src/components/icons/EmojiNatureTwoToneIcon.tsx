import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EmojiNatureTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M21.94 4.88c-.19-.55-.75-.92-1.36-.88h-.98l-.31-.97C19.15 2.43 18.61 2 18 2s-1.15.43-1.29 1.04L16.4 4h-.98c-.61-.04-1.16.32-1.35.88s.04 1.17.56 1.48l.87.52-.4 1.24c-.23.58-.04 1.25.45 1.62.5.37 1.17.35 1.64-.06l.81-.7.81.7c.47.4 1.15.43 1.64.06.5-.37.68-1.04.45-1.62l-.39-1.24.87-.52c.51-.31.74-.92.56-1.48M18 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
        props,
        attrs
      );
  },
});