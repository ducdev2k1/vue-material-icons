import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'TheaterComedyRoundedIcon',
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
      'd': 'M21 2h-8c-1.1 0-2 .9-2 2v3.5h1.5c1.1 0 2 .9 2 2v4.95c1.04.48 2.24.68 3.5.47 2.93-.49 5-3.17 5-6.14V4c0-1.1-.9-2-2-2m-7 4.5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m4.85 4.38h-3.72c-.38 0-.63-.41-.44-.75.39-.66 1.27-1.13 2.3-1.13s1.91.47 2.3 1.14c.19.33-.06.74-.44.74M19 7.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1'
    }
  }
],
              props,
              attrs
            );
        },
      });