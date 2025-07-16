import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'RocketLaunchTwoToneIcon',
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
      'd': 'M6.71 18.71c-.28.28-2.17.76-2.17.76s.47-1.88.76-2.17c.17-.19.42-.3.7-.3.55 0 1 .45 1 1 0 .28-.11.53-.29.71m.7-7.88-1.91-.82 1.97-1.97 1.44.29c-.57.83-1.08 1.7-1.5 2.5m6.58 7.67-.82-1.91c.8-.42 1.67-.93 2.49-1.5l.29 1.44zm6-14.49S16.44 3.32 11.76 8c-1.32 1.32-2.4 3.38-2.73 4.04l2.93 2.93c.65-.32 2.71-1.4 4.04-2.73 4.68-4.68 3.99-8.23 3.99-8.23M15 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });