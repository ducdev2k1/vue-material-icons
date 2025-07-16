import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'VpnLockTwoToneIcon',
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
      'd': 'M12 8h-2v2c0 .55-.45 1-1 1H7v2h6c.55 0 1 .45 1 1v3h1c.9 0 1.64.58 1.9 1.39C18.2 16.97 19 15.08 19 13c0-.34-.04-.67-.08-1H17c-1.65 0-3-1.35-3-3V6c0 1.1-.9 2-2 2m-4 9v-1l-4.79-4.79C3.08 11.79 3 12.38 3 13c0 4.08 3.05 7.44 7 7.93V19c-1.1 0-2-.9-2-2',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });