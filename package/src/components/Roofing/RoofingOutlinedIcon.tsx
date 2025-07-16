import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'RoofingOutlinedIcon',
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
      'd': 'M13 18h-2v-2h2zm2-4H9v6h6zm4-4.7V4h-3v2.6L12 3 2 12h3l7-6.31L19 12h3z'
    }
  }
],
              props,
              attrs
            );
        },
      });