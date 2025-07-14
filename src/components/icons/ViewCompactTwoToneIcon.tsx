import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ViewCompactTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M4 13.25h2.5v-2.5H4zM4 18h2.5v-2.5H4zm4.5-9.5H11V6H8.5zm9 9.5H20v-2.5h-2.5zm0-4.75H20v-2.5h-2.5zm0-7.25v2.5H20V6zM13 8.5h2.5V6H13zm-4.5 4.75H11v-2.5H8.5zm0 4.75H11v-2.5H8.5zM4 8.5h2.5V6H4zm9 4.75h2.5v-2.5H13zM13 18h2.5v-2.5H13z',
        props,
        attrs
      );
  },
});