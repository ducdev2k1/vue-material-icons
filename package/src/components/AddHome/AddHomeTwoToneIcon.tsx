import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddHomeTwoToneIcon',
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
              d: 'M12 5.5 6 10v9h5.08c-.62-4.3 2.72-8 6.92-8v-1z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
