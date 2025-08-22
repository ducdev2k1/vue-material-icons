import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DeskTwoToneIcon',
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
              d: 'M16 8h4v2h-4zm0 4h4v2h-4z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M2 6v12h2V8h10v10h2v-2h4v2h2V6zm18 8h-4v-2h4zm0-4h-4V8h4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
