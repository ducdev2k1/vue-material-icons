import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'UnarchiveSharpIcon',
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
      'd': 'M18.71 3H5.29L3 5.79V21h18V5.79zM14 15v2h-4v-2H6.5L12 9.5l5.5 5.5zM5.12 5l.81-1h12l.94 1z'
    }
  }
],
              props,
              attrs
            );
        },
      });