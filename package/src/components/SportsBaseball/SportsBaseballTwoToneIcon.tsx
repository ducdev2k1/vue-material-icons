import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'SportsBaseballTwoToneIcon',
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
      'd': 'M5.61 7.22C4.6 8.55 4 10.2 4 12s.6 3.45 1.61 4.78C7.06 15.69 8 13.95 8 12s-.94-3.69-2.39-4.78',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });