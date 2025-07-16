import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'BatteryCharging50SharpIcon',
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
      'd': 'M14.47 13.5L11 20v-5.5H9l.53-1H7V22h10v-8.5h-2.53z'
    }
  },
  {
    'tag': 'path',
    'props': {
      'fillOpacity': '.3',
      'd': 'M17 4h-3V2h-4v2H7v9.5h2.53L13 7v5.5h2l-.53 1H17V4z'
    }
  }
],
              props,
              attrs
            );
        },
      });