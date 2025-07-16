import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'DoNotTouchTwoToneIcon',
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
      'd': 'M18 15.17V13h-2.17zm-9-3.34 8.14 8.14c-.05.01-.09.03-.14.03h-6c-.39 0-.64-.23-.75-.36L6.87 16H9z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });