import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'HouseTwoToneIcon',
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
      'd': 'M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5zm7-.19h-4c0-1.1.9-2 2-2s2 .9 2 2',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });