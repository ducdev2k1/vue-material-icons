import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ForwardTwoToneIcon',
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
              d: 'M14 14v1.17L17.17 12 14 8.83V10H6v4z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm20 12-8-8v4H4v8h8v4zM6 14v-4h8V8.83L17.17 12 14 15.17V14z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
