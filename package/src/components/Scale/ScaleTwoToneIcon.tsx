import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ScaleTwoToneIcon',
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
              d: 'M18.87 4C17.5 5.19 15 6.12 12 6.12S6.5 5.19 5.13 4z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
