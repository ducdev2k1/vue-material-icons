import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RoomServiceTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 9.58c-2.95 0-5.47 1.83-6.5 4.41h13c-1.03-2.58-3.55-4.41-6.5-4.41',
        props,
        attrs
      );
  },
});