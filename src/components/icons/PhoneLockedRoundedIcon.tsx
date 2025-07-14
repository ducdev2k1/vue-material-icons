import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PhoneLockedRoundedIcon',
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
              d: 'M20 5v-.89c0-1-.68-1.92-1.66-2.08C17.08 1.82 16 2.79 16 4v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1m-1 0h-2V4c0-.55.45-1 1-1s1 .45 1 1z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
