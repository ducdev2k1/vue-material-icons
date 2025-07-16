import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'TroubleshootRoundedIcon',
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
      'd': 'm21.29 19.88-3.98-3.98c1.3-1.67 1.96-3.85 1.58-6.2-.54-3.41-3.33-6.14-6.75-6.62C7.57 2.44 3.61 5.69 3.07 10h2.02c.53-3.13 3.48-5.44 6.85-4.93 2.61.4 4.7 2.57 5.02 5.2C17.39 13.9 14.55 17 11 17c-2.42 0-4.5-1.44-5.45-3.5H3.4C4.45 16.69 7.46 19 11 19c1.85 0 3.55-.63 4.9-1.69l3.98 3.98c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41'
    }
  }
],
              props,
              attrs
            );
        },
      });