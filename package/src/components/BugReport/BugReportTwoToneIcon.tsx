import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BugReportTwoToneIcon',
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
              d: 'M15.83 9.65 15.46 9c-.3-.53-.71-.96-1.21-1.31l-.61-.42-.68-.16C12.63 7.04 12.32 7 12 7c-.31 0-.63.04-.94.11l-.74.18-.57.4c-.49.34-.91.79-1.21 1.31l-.37.65-.1.65c-.04.23-.07.48-.07.7v4c0 .22.03.47.07.7l.1.65.37.65c.72 1.24 2.04 2 3.46 2s2.74-.77 3.46-2l.37-.64.1-.65c.04-.24.07-.49.07-.71v-4c0-.22-.03-.47-.07-.7zM14 16h-4v-2h4zm0-4h-4v-2h4z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
