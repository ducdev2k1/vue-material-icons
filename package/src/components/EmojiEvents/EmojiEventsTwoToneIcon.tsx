import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'EmojiEventsTwoToneIcon',
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
      'd': 'M12 14c-1.65 0-3-1.35-3-3V5h6v6c0 1.65-1.35 3-3 3',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });