import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DoNotStepRoundedIcon',
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
              d: 'M2.1 3.51c-.39.39-.39 1.02 0 1.41l7.19 7.19c.18.2.18.5-.01.7-.1.1-.23.15-.35.15s-.26-.05-.35-.15L6.87 11.1c-.11.4-.26.78-.45 1.12l1.4 1.4c.2.2.2.51 0 .71-.1.1-.23.15-.35.15s-.26-.05-.35-.15l-1.27-1.27c-.24.29-.5.56-.77.8l1.28 1.28c.2.2.2.51 0 .71-.1.1-.23.15-.36.15s-.26-.05-.35-.15l-1.38-1.38c-.71.47-1.43.81-2.02 1.04-.76.3-1.25 1.04-1.25 1.86V18c0 1.1.9 2 2 2h6.67c.53 0 1.04-.21 1.41-.59l2.74-2.74 5.23 5.23c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L3.51 3.51a.996.996 0 0 0-1.41 0m16.41 12.17-1.41-1.41 4.48-4.48c.78.78.78 2.05 0 2.83zm2.37-6.6-4.48 4.48-7.1-7.09 3.09-3.07c.78-.78 2.04-.77 2.82 0z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
