import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ElectricalServicesTwoToneIcon',
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
              d: 'M20 15h-2v-2h2c.55 0 1 .45 1 1s-.45 1-1 1m0 4h-2v-2h2c.55 0 1 .45 1 1s-.45 1-1 1m-6-7c-1.1 0-2 .9-2 2h-2v4h2c0 1.1.9 2 2 2h3v-8z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
