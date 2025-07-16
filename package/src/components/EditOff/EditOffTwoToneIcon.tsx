import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'EditOffTwoToneIcon',
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
      'd': 'M5 18.08V19h.92l5.12-5.12-.92-.92zm9.06-9.06-1.11 1.11.92.92 1.11-1.11z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });