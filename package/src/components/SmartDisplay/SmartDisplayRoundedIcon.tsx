import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SmartDisplayRoundedIcon',
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
              d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M9.5 14.67V9.33c0-.79.88-1.27 1.54-.84l4.15 2.67c.61.39.61 1.29 0 1.68l-4.15 2.67c-.66.43-1.54-.05-1.54-.84',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
