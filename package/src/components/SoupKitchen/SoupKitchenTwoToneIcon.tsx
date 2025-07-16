import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SoupKitchenTwoToneIcon',
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
              d: 'M14.12 17c-.73 1.78-2.43 3-4.37 3s-3.67-1.23-4.43-3h8.78',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
