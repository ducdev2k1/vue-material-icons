import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ShieldMoonIcon',
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
              d: 'M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5zm3.97 12.41c-1.84 2.17-5.21 2.1-6.96-.07-2.19-2.72-.65-6.72 2.69-7.33.34-.06.63.27.51.6-.46 1.23-.39 2.64.32 3.86s1.89 1.99 3.18 2.2c.34.05.49.47.26.74',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
