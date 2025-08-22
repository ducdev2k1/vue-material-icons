import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'QueueMusicTwoToneIcon',
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
            tag: 'circle',
            props: {
              cx: '16',
              cy: '17',
              r: '1',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M3 10h12v2H3zm0 4h8v2H3zm0-8h12v2H3zm14 8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
