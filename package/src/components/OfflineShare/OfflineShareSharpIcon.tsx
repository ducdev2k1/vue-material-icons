import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OfflineShareSharpIcon',
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
              d: 'M6 5H4v18h12v-2H6z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 1H8v18h12zm-2 14h-8V5h8z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M12.5 10.25h2V12L17 9.5 14.5 7v1.75H11V12h1.5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
