import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TurnRightSharpIcon',
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
              d: 'm17.17 11-1.58 1.59L17 14l4-4-4-4-1.41 1.41L17.17 9H7v11h2v-9z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
