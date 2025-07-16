import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'MicrowaveTwoToneIcon',
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
      'd': 'M4 18h10V6H4zM7.75 8c.8 0 1.39.39 1.81.67.31.21.51.33.69.33.37 0 .8-.41.95-.61l1.42 1.42c-.36.4-1.22 1.19-2.37 1.19-.79 0-1.37-.38-1.79-.66-.33-.22-.52-.34-.71-.34-.37 0-.8.41-.95.61L5.37 9.19C5.73 8.79 6.59 8 7.75 8m0 5c.8 0 1.39.39 1.81.67.31.21.51.33.69.33.37 0 .8-.41.95-.61l1.42 1.42c-.36.4-1.22 1.19-2.37 1.19-.79 0-1.37-.38-1.79-.66-.33-.22-.52-.34-.71-.34-.37 0-.8.41-.95.61l-1.42-1.42c.35-.4 1.21-1.19 2.37-1.19M16 6v12h4V6zm2 11c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m1-4h-2V7h2z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });