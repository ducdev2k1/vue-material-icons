import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'DataArrayRoundedIcon',
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
      'd': 'M15 5c0 .55.45 1 1 1h2v12h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-2c-.55 0-1 .45-1 1M6 20h2c.55 0 1-.45 1-1s-.45-1-1-1H6V6h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2'
    }
  }
],
              props,
              attrs
            );
        },
      });