import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ShowerTwoToneIcon',
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
              d: 'M12 7c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5',
              opacity: '.3',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '8',
              cy: '20',
              r: '1',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '16',
              cy: '17',
              r: '1',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92M7 12c0-2.76 2.24-5 5-5s5 2.24 5 5z',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '16',
              cy: '20',
              r: '1',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '12',
              cy: '17',
              r: '1',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '8',
              cy: '17',
              r: '1',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '12',
              cy: '20',
              r: '1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
