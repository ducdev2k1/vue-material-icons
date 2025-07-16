import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'VerifiedTwoToneIcon',
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
      'd': 'm18.49 9.88.08-.85.18-1.95-1.9-.43-.84-.19-.44-.74-.99-1.68-1.79.76-.79.34-.79-.34-1.79-.77-.99 1.68-.44.74-.84.19-1.9.43.18 1.94.08.85-.56.65-1.29 1.48 1.29 1.47.56.65-.08.85-.18 1.96 1.9.43.84.19.44.74.99 1.67 1.78-.77.8-.33.79.34 1.78.77.99-1.68.44-.74.84-.19 1.9-.43-.18-1.95-.08-.85.56-.65L20.33 12l-1.29-1.47zm-8.4 6.84-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });