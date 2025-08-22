import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VolumeDownTwoToneIcon',
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
              d: 'M7 13h2.83L12 15.17V8.83L9.83 11H7z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02S17.48 8.71 16 7.97M5 9v6h4l5 5V4L9 9zm7-.17v6.34L9.83 13H7v-2h2.83z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
