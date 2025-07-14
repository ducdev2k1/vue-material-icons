import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LibraryAddCheckTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M8 16h12V4H8zm2.4-6.91 2.07 2.08L17.6 6 19 7.41 12.47 14 9 10.5z',
        props,
        attrs
      );
  },
});