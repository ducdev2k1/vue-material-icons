import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AssistantTwoToneIcon',
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
              d: 'm9.83 18 .59.59L12 20.17l1.59-1.59.58-.58H19V4H5v14zm.29-8.88L12 5l1.88 4.12L18 11l-4.12 1.88L12 17l-1.88-4.12L6 11z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
