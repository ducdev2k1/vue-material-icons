import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'WbCloudyTwoToneIcon',
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
      'd': 'm19.23 12.04-1.52-.11-.3-1.5C16.89 7.86 14.62 6 12.01 6 9.95 6 8.08 7.14 7.13 8.96l-.5.95-1.07.11c-2.02.22-3.55 1.93-3.55 3.98 0 2.21 1.79 4 4 4h13c1.65 0 3-1.35 3-3 0-1.55-1.23-2.86-2.78-2.96',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });