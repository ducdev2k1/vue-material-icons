import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'LockPersonTwoToneIcon',
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
      'd': 'M6 10v10h5.29c-.19-.63-.29-1.3-.29-2 0-3.87 3.13-7 7-7v-1z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });