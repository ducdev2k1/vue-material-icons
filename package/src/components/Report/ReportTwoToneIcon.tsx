import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'ReportTwoToneIcon',
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
      'd': 'M9.1 5 5 9.1v5.8L9.1 19h5.8l4.1-4.1V9.1L14.9 5zM12 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m1-3h-2V7h2z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });