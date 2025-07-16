import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'ScatterPlotRoundedIcon',
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
    'tag': 'circle',
    'props': {
      'cx': '7',
      'cy': '14',
      'r': '3'
    }
  }
],
              props,
              attrs
            );
        },
      });