import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NearbyOffSharpIcon',
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
              d: 'M22.82 12.01 18.83 16l-1.81-1.81L19.2 12 12 4.8 9.81 6.99 8 5.17l3.99-3.99zm-1.63 9.18-1.41 1.41L16 18.83l-3.99 3.99L1.18 11.99 5.17 8 1.39 4.22 2.8 2.81zm-7-4.17-1.39-1.39-.8.8L7.58 12l.8-.8-1.4-1.39L4.8 12l7.2 7.2zM16.42 12 12 7.58l-.8.8 4.42 4.42z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
