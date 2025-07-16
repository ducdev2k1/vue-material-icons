import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DescriptionTwoToneIcon',
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
              d: 'M13 4H6v16h12V9h-5zm3 14H8v-2h8zm0-6v2H8v-2z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
