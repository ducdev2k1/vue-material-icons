import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'BusAlertTwoToneIcon',
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
      'd': 'M4 16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3H4zm9.5-2c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5m-7 0c.83 0 1.5.67 1.5 1.5S7.33 17 6.5 17 5 16.33 5 15.5 5.67 14 6.5 14M4.43 6H11c0-.33.03-.66.08-.98-3.68-.11-5.83.27-6.65.98',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });