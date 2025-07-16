import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'HdrPlusTwoToneIcon',
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
      'd': 'M12 4c-4.41 0-8 3.59-8 8 0 2.52 1.17 4.77 3 6.24V13h3.5c.8 0 1.5.7 1.5 1.5v1c0 .6-.4 1.1-.9 1.4L12 19h-1.5l-.9-2H8.5v2h-.37c1.15.64 2.47 1 3.87 1 4.41 0 8-3.59 8-8s-3.59-8-8-8m0 8h-1.5V9.5h-2V12H7V6h1.5v2h2V6H12zm5.5 4H16v1.5h-1.5V16H13v-1.5h1.5V13H16v1.49h1.5zm0-5.5c0 .8-.7 1.5-1.5 1.5h-3V6h3c.8 0 1.5.7 1.5 1.5z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });