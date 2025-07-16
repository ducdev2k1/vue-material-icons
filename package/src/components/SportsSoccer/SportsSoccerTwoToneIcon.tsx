import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'SportsSoccerTwoToneIcon',
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
      'd': 'M7.01 9.49 11 6.7V5.3l-1.35-.95c-1.82.57-3.37 1.77-4.38 3.34l.39 1.34zm-2 1.43-1 .73c0 .12-.01.23-.01.35 0 1.99.73 3.81 1.94 5.21l1.14-.1.79-1.37L6.4 11.4zm13.33-1.89.39-1.34c-1.01-1.57-2.55-2.77-4.38-3.34L13 5.3v1.4l3.99 2.79zm-9.97 1.95L9.73 15h4.54l1.36-4.02L12 8.44zM9.45 17l-.64 1.11.69 1.49c.79.25 1.63.4 2.5.4s1.71-.15 2.5-.41l.69-1.49-.64-1.1zm10.53-5.35-1-.73-1.38.48-1.46 4.34.79 1.37 1.14.1C19.27 15.81 20 13.99 20 12c0-.12-.01-.23-.02-.35',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });