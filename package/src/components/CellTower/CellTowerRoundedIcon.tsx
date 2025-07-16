import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'CellTowerRoundedIcon',
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
      'd': 'm7.9 14.1.09-.09c.27-.27.32-.71.08-1.01C7.36 12.09 7 11.01 7 10c0-1.08.35-2.16 1.04-3.01.25-.3.21-.75-.07-1.02L7.9 5.9c-.34-.34-.9-.3-1.2.08-.91 1.18-1.4 2.6-1.4 4.02s.49 2.84 1.4 4.02c.3.38.86.42 1.2.08M18.51 3.49l-.08.08c-.3.3-.29.76-.03 1.08 1.26 1.53 1.9 3.48 1.9 5.35s-.63 3.81-1.9 5.35c-.28.33-.23.83.08 1.14.35.35.93.31 1.24-.07C21.29 14.54 22 12.31 22 10c0-2.32-.79-4.55-2.31-6.43-.3-.37-.85-.41-1.18-.08'
    }
  }
],
              props,
              attrs
            );
        },
      });