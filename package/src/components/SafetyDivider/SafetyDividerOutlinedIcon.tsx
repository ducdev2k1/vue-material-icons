import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SafetyDividerOutlinedIcon',
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
              d: 'M11 5h2v14h-2zm-6 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m2.78 1.58C6.93 13.21 5.99 13 5 13s-1.93.21-2.78.58C1.48 13.9 1 14.62 1 15.43V16h8v-.57c0-.81-.48-1.53-1.22-1.85M19 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m2.78 1.58c-.85-.37-1.79-.58-2.78-.58s-1.93.21-2.78.58c-.74.32-1.22 1.04-1.22 1.85V16h8v-.57c0-.81-.48-1.53-1.22-1.85',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
