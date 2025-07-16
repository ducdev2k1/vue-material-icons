import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VideoStableTwoToneIcon',
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
              d: 'm7.0627 13.3185 1.3204-4.926 8.558 2.2938-1.3205 4.9261z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
