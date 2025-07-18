import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StartTwoToneIcon',
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
              d: 'M14.59 7.41 18.17 11H6v2h12.17l-3.59 3.59L16 18l6-6-6-6zM2 6v12h2V6z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
