import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'SkipNextOutlinedIcon',
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
      'd': 'm6 18 8.5-6L6 6zm2-8.14L11.03 12 8 14.14zM16 6h2v12h-2z'
    }
  }
],
              props,
              attrs
            );
        },
      });