import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'PersonOffTwoToneIcon',
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
      'd': 'm15.17 18-3-3H12c-2.37 0-4.29.73-5.48 1.34-.32.16-.52.5-.52.88V18zM10.13 7.3C10.41 6.54 11.14 6 12 6c1.1 0 2 .9 2 2 0 .86-.54 1.59-1.3 1.87',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });