import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IosShareTwoToneIcon',
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
              d: 'M18 8h-3v2h3v11H6V10h3V8H6c-1.11 0-2 .89-2 2v11c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.11-.9-2-2-2',
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
