import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ElectricMeterSharpIcon',
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
              d: 'M12 2c-4.96 0-9 4.04-9 9 0 3.91 2.51 7.24 6 8.47V22h2v-2.06c.33.04.66.06 1 .06s.67-.02 1-.06V22h2v-2.53c3.49-1.24 6-4.57 6-8.47 0-4.96-4.04-9-9-9m2.25 12-3 3-1.5-1.5L11 14.25 9.75 13l3-3 1.5 1.5L13 12.75zM16 9H8V7h8z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
