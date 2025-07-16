import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'SupportTwoToneIcon',
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
      'd': 'M10.3 7.32 9.13 4.54c-2.11.81-3.78 2.48-4.59 4.59l2.78 1.15c.51-1.38 1.6-2.46 2.98-2.96m-2.98 6.4-2.78 1.15c.81 2.1 2.48 3.78 4.59 4.59l1.17-2.78c-1.39-.5-2.47-1.59-2.98-2.96m9.35-3.45 2.78-1.15c-.81-2.1-2.48-3.77-4.58-4.58l-1.15 2.78c1.37.51 2.45 1.58 2.95 2.95m.01 3.44c-.5 1.37-1.58 2.46-2.95 2.97l1.15 2.78c2.1-.81 3.77-2.48 4.58-4.58z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });