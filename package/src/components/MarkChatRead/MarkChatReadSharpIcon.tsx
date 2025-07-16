import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'MarkChatReadSharpIcon',
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
      'd': 'M12.03 17.5c-.02.17-.03.33-.03.5H6l-4 4V2h20v8.68c-.91-.43-1.92-.68-3-.68-3.87 0-7 3.13-7 7 0 .17.01.33.03.5M23 14.34l-1.41-1.41-4.24 4.24-2.12-2.12-1.41 1.41L17.34 20z'
    }
  }
],
              props,
              attrs
            );
        },
      });