import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoEncryptionGmailerrorredTwoToneIcon',
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
              d: 'M6 20h10.78l-10-10H6zm6.44-10L18 15.56V10z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
