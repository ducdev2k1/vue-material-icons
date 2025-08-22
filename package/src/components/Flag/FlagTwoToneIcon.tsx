import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FlagTwoToneIcon',
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
              d: 'M12.36 6H7v6h7.24l.4 2H18V8h-5.24z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6zm3.6 8h-3.36l-.4-2H7V6h5.36l.4 2H18z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
