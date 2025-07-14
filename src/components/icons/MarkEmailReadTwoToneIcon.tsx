import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MarkEmailReadTwoToneIcon',
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
              d: 'M20 8v4.08c-.33-.05-.66-.08-1-.08-3.53 0-6.43 2.61-6.92 6H4V8l8 5zm0-2H4l8 5z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
