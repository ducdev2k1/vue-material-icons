import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GarageSharpIcon',
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
              cx: '15',
              cy: '13',
              r: '1',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '9',
              cy: '13',
              r: '1',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm8.33 7.5-.66 2h8.66l-.66-2z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M22 2H2v20h20zm-3 16.5h-2v-2H7v2H5v-7.31L6.89 5.5H17.1l1.9 5.69z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
