import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'PestControlTwoToneIcon',
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
      'd': 'M12 9c-2.21 0-4 2.24-4 5s1.79 5 4 5 4-2.24 4-5-1.79-5-4-5m1 8h-2v-6h2zm.88-9.64C13.62 6.57 12.88 6 12 6s-1.62.57-1.88 1.36C10.71 7.13 11.34 7 12 7s1.29.13 1.88.36',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });