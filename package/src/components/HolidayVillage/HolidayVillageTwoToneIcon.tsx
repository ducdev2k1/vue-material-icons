import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HolidayVillageTwoToneIcon',
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
              d: 'm8 6.83-4 4V18h3v-3h2v3h3v-7.17zM9 13H7v-2h2z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
