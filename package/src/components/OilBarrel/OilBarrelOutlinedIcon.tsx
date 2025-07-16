import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'OilBarrelOutlinedIcon',
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
      'd': 'M9 13.05C9 14.68 10.34 16 12 16s3-1.32 3-2.95c0-1.31-.53-1.69-3-4.55-2.48 2.88-3 3.25-3 4.55'
    }
  }
],
              props,
              attrs
            );
        },
      });