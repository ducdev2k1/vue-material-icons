import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'ModeFanOffTwoToneIcon',
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
      'd': 'M4.5 10c-.08 0-.5.03-.5.6 0 2 .82 3.4 2 3.4.51 0 .89-.12 2.69-.86-.07-.2-.12-.41-.15-.62-1.48-.33-2.49-.89-3.39-2.16-.22-.31-.38-.36-.65-.36m5.5 9.5c0 .08.03.5.6.5 2 0 3.4-.82 3.4-2 0-.38-.07-.69-.42-1.59l-.97-.97c-.03.01-.06.02-.09.02-.33 1.48-.89 2.49-2.16 3.39-.31.22-.36.38-.36.65m3.65-14.35c.3-.22.35-.38.35-.65 0-.08-.03-.5-.6-.5-2 0-3.4.82-3.4 2 0 .38.07.69.42 1.59l1.05 1.05.02-.1c.33-1.48.88-2.5 2.16-3.39m5.2 8.5c.21.3.38.35.65.35.08 0 .5-.03.5-.6 0-2-.82-3.4-2-3.4-.51 0-.89.12-2.69.86.07.2.12.41.15.62 1.48.34 2.5.89 3.39 2.17',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });