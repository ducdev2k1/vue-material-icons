import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MarkEmailReadSharpIcon',
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
              d: 'M12 19c0-3.87 3.13-7 7-7 1.08 0 2.09.25 3 .68V4H2v16h10.08c-.05-.33-.08-.66-.08-1M4 6l8 5 8-5v2l-8 5-8-5zm13.34 16-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L23 16.34z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
