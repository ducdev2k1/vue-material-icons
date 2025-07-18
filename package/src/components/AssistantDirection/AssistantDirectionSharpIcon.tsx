import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AssistantDirectionSharpIcon',
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
              d: 'M13.5 10H8v5h2v-3h3.5v2.5L17 11l-3.5-3.5zM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1m8.31 11-8.34 8.37L3.62 12l8.34-8.37z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
