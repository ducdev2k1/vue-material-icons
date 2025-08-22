import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FlashlightOnTwoToneIcon',
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
              d: 'm8 7.39 2 3V20h4v-9.6l2-3.01V7H8zm4 5.11c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M8 4h8v1H8z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M6 2v6l2 3v11h8V11l2-3V2zm10 5.39-2 3.01V20h-4v-9.61l-2-3V7h8zM16 5H8V4h8z',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '12',
              cy: '14',
              r: '1.5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
