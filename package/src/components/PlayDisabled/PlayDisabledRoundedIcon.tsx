import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlayDisabledRoundedIcon',
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
              d: 'M2.1 3.51c-.39.39-.39 1.02 0 1.41l5.9 5.9v6.35c0 .79.87 1.27 1.54.84l3.45-2.2 6.08 6.08c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L3.51 3.51a.996.996 0 0 0-1.41 0m15.58 9.33c.62-.39.62-1.29 0-1.69L9.54 5.98c-.27-.17-.57-.19-.84-.11l7.75 7.75z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
