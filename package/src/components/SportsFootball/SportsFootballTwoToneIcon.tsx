import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'SportsFootballTwoToneIcon',
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
      'd': 'M16.26 5c-.35 0-.8.01-1.33.06l4.03 4.03c.14-1.63.01-3.07-.17-3.86-.51-.11-1.39-.23-2.53-.23M5.21 18.77c.51.11 1.39.23 2.53.23.34 0 .79-.01 1.3-.05l-4.01-4.01c-.12 1.62 0 3.04.18 3.83m2.66-10.9c-1.28 1.28-2.03 2.97-2.45 4.65l6.04 6.04c1.6-.39 3.33-1.11 4.66-2.44 1.28-1.28 2.03-2.95 2.44-4.63l-6.05-6.05c-1.59.39-3.31 1.11-4.64 2.43M15.5 9.9l-5.6 5.6-1.4-1.4 5.6-5.6z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });