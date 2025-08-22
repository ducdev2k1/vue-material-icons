import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MarkAsUnreadSharpIcon',
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
              d: 'M16.23 7h4.12L10.5 2 2 6.21V17h2V7.4L10.5 4z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M5 8v13h17V8zm15 4-6.5 3.33L7 12v-2l6.5 3.33L20 10z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
