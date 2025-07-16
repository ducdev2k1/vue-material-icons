import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ScreenLockRotationRoundedIcon',
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
              d: 'm20.41 11.36-.35-.35a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l.35.35-4.24 4.24-7.78-7.78 4.24-4.24.35.35c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-.35-.36c-.79-.79-2.03-.79-2.82 0L5.57 7.82c-.78.78-.78 2.05 0 2.83l7.78 7.78c.79.79 2.03.79 2.82 0l4.24-4.24c.79-.78.79-2.05 0-2.83m-9.56 6.49c-.31-.31-.85-.09-.85.36v1.53c-3.17-.82-5.59-3.54-5.95-6.86-.06-.51-.49-.88-.99-.88-.6 0-1.07.53-1 1.12C2.62 18.11 6.87 22 12 22c.59 0 1.17-.06 1.73-.16.4-.07.55-.56.27-.85z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
