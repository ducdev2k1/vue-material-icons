import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CancelScheduleSendOutlinedIcon',
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
              d: 'M16.5 9c-.42 0-.83.04-1.24.11L1.01 3 1 10l10.06 1.34c-.42.44-.78.93-1.09 1.46L1 14l.01 7 8.07-3.46C9.59 21.19 12.71 24 16.5 24c4.14 0 7.5-3.36 7.5-7.5S20.64 9 16.5 9M3 8.25l.01-2.22 7.51 3.22zm6.1 7.11L3 17.97v-2.22l6.17-.82c-.03.14-.05.28-.07.43M16.5 22c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
