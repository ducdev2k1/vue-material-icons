import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'SignalCellularConnectedNoInternet3BarIcon',
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
      'fillOpacity': '.3',
      'd': 'M22 8V2L2 22h16V8z'
    }
  },
  {
    'tag': 'path',
    'props': {
      'd': 'M17 22V7L2 22h15zm3-12v8h2v-8h-2zm0 12h2v-2h-2v2z'
    }
  }
],
              props,
              attrs
            );
        },
      });