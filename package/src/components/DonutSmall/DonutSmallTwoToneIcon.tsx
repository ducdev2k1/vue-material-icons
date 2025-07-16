import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'DonutSmallTwoToneIcon',
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
      'd': 'M15.99 9h3.43C18.6 7 17 5.4 15 4.58v3.43c.37.28.71.62.99.99M4 12c0 3.35 2.04 6.24 5 7.42v-3.44c-1.23-.93-2-2.4-2-3.99S7.77 8.93 9 8V4.58C6.04 5.76 4 8.65 4 12m11 3.99v3.43c2-.82 3.6-2.42 4.42-4.42h-3.43c-.28.37-.62.71-.99.99',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });