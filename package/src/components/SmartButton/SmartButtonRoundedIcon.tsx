import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SmartButtonRoundedIcon',
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
            tag: 'path',
            props: {
              d: 'M22 9v6c0 1.1-.9 2-2 2h-1v-2h1V9H4v6h6v2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2m-7.96 8.99c.18.39.73.39.91 0l.63-1.4 1.4-.63c.39-.18.39-.73 0-.91l-1.4-.63-.63-1.4c-.18-.39-.73-.39-.91 0l-.63 1.4-1.4.63c-.39.18-.39.73 0 .91l1.4.63zm2.7-4.56c.1.22.42.22.52 0l.36-.8.8-.36c.22-.1.22-.42 0-.52l-.8-.36-.36-.8c-.1-.22-.42-.22-.52 0l-.36.8-.8.36c-.22.1-.22.42 0 .52l.8.36z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
