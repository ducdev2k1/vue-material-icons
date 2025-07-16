import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'ExtensionTwoToneIcon',
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
      'd': 'M19 13h-2V7h-6V5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2H4l.01 2.12C5.76 9.8 7 11.51 7 13.5s-1.25 3.7-3 4.38V20h2.12c.68-1.75 2.39-3 4.38-3s3.7 1.25 4.38 3H17v-6h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });