import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VolumeMuteTwoToneIcon',
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
              d: 'M9 13h2.83L14 15.17V8.83L11.83 11H9z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M7 9v6h4l5 5V4l-5 5zm7-.17v6.34L11.83 13H9v-2h2.83z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
