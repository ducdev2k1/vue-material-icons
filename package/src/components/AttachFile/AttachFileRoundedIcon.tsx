import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AttachFileRoundedIcon',
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
              d: 'M16.5 6.75v10.58c0 2.09-1.53 3.95-3.61 4.15-2.39.23-4.39-1.64-4.39-3.98V5.14c0-1.31.94-2.5 2.24-2.63 1.5-.15 2.76 1.02 2.76 2.49v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75v8.61c0 1.31.94 2.5 2.24 2.63 1.5.15 2.76-1.02 2.76-2.49V5.17c0-2.09-1.53-3.95-3.61-4.15C9.01.79 7 2.66 7 5v12.27c0 2.87 2.1 5.44 4.96 5.71 3.29.3 6.04-2.26 6.04-5.48V6.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
