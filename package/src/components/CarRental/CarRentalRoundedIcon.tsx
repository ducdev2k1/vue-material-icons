import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CarRentalRoundedIcon',
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
              d: 'M8 7c1.3 0 2.41-.84 2.83-2H16v1c0 .55.45 1 1 1s1-.45 1-1V5c.55 0 1-.45 1-1s-.45-1-1-1h-7.17C10.35 1.65 8.95.76 7.4 1.06c-1.17.23-2.12 1.19-2.35 2.36C4.7 5.32 6.15 7 8 7m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m8.39 6H7.61c-.43 0-.81.28-.95.68L5 14.69V21c0 .55.45 1 1 1s1-.45 1-1v-1h10v1c0 .55.45 1 1 1s1-.45 1-1v-6.31l-1.66-5.01c-.14-.4-.52-.68-.95-.68M9 17.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M7.67 13l.66-2h7.34l.66 2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
