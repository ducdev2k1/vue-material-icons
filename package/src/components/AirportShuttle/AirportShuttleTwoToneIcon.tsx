import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'AirportShuttleTwoToneIcon',
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
    'tag': 'path',
    'props': {
      'd': 'M3 14h.78c.55-.61 1.34-1 2.22-1s1.67.39 2.22 1h7.56c.55-.61 1.34-1 2.22-1s1.67.39 2.22 1H21v-2H3z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });