import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ViewCompactRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        [
          {
            tag: 'path',
            props: {
              d: 'M4 18h2.5v-2.5H4zm0-4.75h2.5v-2.5H4zM4 8.5h2.5V6H4zM17.5 6v2.5H20V6zM13 8.5h2.5V6H13zm4.5 9.5H20v-2.5h-2.5zm0-4.75H20v-2.5h-2.5zM8.5 18H11v-2.5H8.5zm4.5 0h2.5v-2.5H13zM8.5 8.5H11V6H8.5zm4.5 4.75h2.5v-2.5H13zm-4.5 0H11v-2.5H8.5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
