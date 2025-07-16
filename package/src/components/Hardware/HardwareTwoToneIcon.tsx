import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'HardwareTwoToneIcon',
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
      'd': 'M6.77 6H11v5h2V5H9c-.89 0-1.68.39-2.23 1M11 13h2v6h-2z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });