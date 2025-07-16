import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'TempleHinduTwoToneIcon',
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
      'd': 'M13.51 5h-3.02l-.6 2h4.22zm1.2 4H9.29l-.6 2h6.62zm1.2 4H8.09l-.6 2H4v5h5v-5h6v5h5v-5h-3.49z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });