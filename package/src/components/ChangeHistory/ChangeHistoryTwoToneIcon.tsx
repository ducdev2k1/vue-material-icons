import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChangeHistoryTwoToneIcon',
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
              d: 'M12 7.77 5.61 18h12.78z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M12 4 2 20h20zm0 3.77L18.39 18H5.61z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
