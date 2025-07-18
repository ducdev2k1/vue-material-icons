import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HealingSharpIcon',
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
              d: 'm17.74 12.01 4.68-4.68-5.75-5.75-4.68 4.68L7.3 1.58 1.55 7.34l4.68 4.69-4.68 4.68 5.75 5.75 4.68-4.68 4.69 4.69 5.76-5.76zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m2.66 9.34-3.63-3.62 3.63-3.63 3.62 3.62z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
