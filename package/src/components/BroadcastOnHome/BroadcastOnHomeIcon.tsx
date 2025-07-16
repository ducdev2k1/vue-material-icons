import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'BroadcastOnHomeIcon',
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
      'd': 'M22 6c0-1.1-.9-2-2-2H4v2h16v2.59c.73.29 1.4.69 2 1.17zM8 9H3c-.5 0-1 .5-1 1v9c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-9c0-.5-.5-1-1-1m-1 9H4v-7h3zm10.75-1.03c.3-.23.5-.57.5-.97 0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25 1.25c0 .4.2.75.5.97V22h1.5z'
    }
  }
],
              props,
              attrs
            );
        },
      });