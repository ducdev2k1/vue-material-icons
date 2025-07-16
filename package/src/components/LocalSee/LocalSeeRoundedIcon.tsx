import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'LocalSeeRoundedIcon',
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
      'd': 'M9.5 14c0 1.38 1.12 2.5 2.5 2.5 1.23 0 2.25-.9 2.46-2.07-1-1.01-1.83-1.98-2.48-2.93-1.37.02-2.48 1.13-2.48 2.5'
    }
  }
],
              props,
              attrs
            );
        },
      });