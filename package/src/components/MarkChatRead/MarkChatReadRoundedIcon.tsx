import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MarkChatReadRoundedIcon',
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
              d: 'M18.05 19.29c-.39.39-1.02.39-1.41 0l-2.12-2.12a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l1.41 1.41 3.54-3.54c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41zM12 17c0-3.87 3.13-7 7-7 1.08 0 2.09.25 3 .68V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v18l4-4h6c0-.17.01-.33.03-.5-.02-.17-.03-.33-.03-.5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
