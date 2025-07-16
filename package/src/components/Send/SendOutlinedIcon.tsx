import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'SendOutlinedIcon',
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
      'd': 'm4.01 6.03 7.51 3.22-7.52-1zm7.5 8.72L4 17.97v-2.22zM2.01 3 2 10l15 2-15 2 .01 7L23 12z'
    }
  }
],
              props,
              attrs
            );
        },
      });