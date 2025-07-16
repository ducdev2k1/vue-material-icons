import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'NoLuggageTwoToneIcon',
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
      'd': 'm16.17 19-3.42-3.42V18h-1.5v-3.92L9.5 12.33V18H8v-7.17l-1-1V19zM17 8v6.17l-1-1V9h-1.5v2.67l-1.75-1.75V9h-.92l-1-1z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });