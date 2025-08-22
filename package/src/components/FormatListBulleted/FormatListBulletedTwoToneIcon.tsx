import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormatListBulletedTwoToneIcon',
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
              d: 'M7 5h14v2H7z',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '4',
              cy: '6',
              r: '1.5',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M7 11h14v2H7zm0 6h14v2H7zm-3 2.5c.82 0 1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5-1.5.68-1.5 1.5.68 1.5 1.5 1.5',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '4',
              cy: '12',
              r: '1.5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
