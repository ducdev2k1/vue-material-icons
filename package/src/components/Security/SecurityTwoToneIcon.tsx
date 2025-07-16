import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'SecurityTwoToneIcon',
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
      'd': 'M12 3.19 5 6.3V12h7v8.93c3.72-1.15 6.47-4.82 7-8.94h-7z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });