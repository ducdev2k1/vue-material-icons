import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SystemSecurityUpdateGoodRoundedIcon',
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
              d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 18H7V6h10zm-6.66-3.71c.39.39 1.02.39 1.41 0l3.54-3.54c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0l-2.83 2.83-.71-.71a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
