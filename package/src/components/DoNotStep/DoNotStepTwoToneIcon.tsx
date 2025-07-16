import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'DoNotStepTwoToneIcon',
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
      'd': 'm14.98 12.15 3.07-3.07-4.25-4.26-3.08 3.07zm-2.56 3.11-1.67-1.68-3.33 3.32c-.78.78-2.05.78-2.83-.01l-.19-.17-.47.24c-.29.14-.59.27-.89.39l-.01.65h6.64z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });