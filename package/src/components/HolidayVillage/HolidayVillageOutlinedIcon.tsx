import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HolidayVillageOutlinedIcon',
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
              d: 'm8 4-6 6v10h12V10zm4 14H9v-3H7v3H4v-7.17l4-4 4 4zm-3-5H7v-2h2zm9 7V8.35L13.65 4h-2.83L16 9.18V20zm4 0V6.69L19.31 4h-2.83L20 7.52V20z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
