import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IosShareSharpIcon',
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
              d: 'M20 8h-5v2h3v11H6V10h3V8H4v15h16z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M11 16h2V5h3l-4-4-4 4h3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
