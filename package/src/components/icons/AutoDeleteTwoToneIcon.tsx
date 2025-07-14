import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AutoDeleteTwoToneIcon',
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
              d: 'M12 7H4v10h5.08c-.05-.33-.08-.66-.08-1 0-2.38 1.19-4.47 3-5.74z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
