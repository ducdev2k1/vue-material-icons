import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'NoDrinksRoundedIcon',
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
      'd': 'M20.49 20.49 3.51 3.51a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l7.54 7.54L11 14v5H7c-.55 0-1 .45-1 1s.45 1 1 1h10c.32 0 .59-.16.78-.4l1.3 1.3c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41M13 19v-3.17L16.17 19zM7.83 5l-2-2h13.72c.8 0 1.45.65 1.45 1.45 0 .35-.13.7-.37.96l-5.83 6.56L9.83 7h6.74l1.78-2z'
    }
  }
],
              props,
              attrs
            );
        },
      });