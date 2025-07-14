import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HiveTwoToneIcon',
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
              d: 'M5.92 7 4.79 9l1.13 2h2.14l1.13-2-1.13-2zm5.02 9L9.8 18.02 10.92 20h2.16l1.12-1.98L13.06 16zm2.12-2 1.13-2-1.13-2h-2.12l-1.13 2 1.13 2zm-7.14-1-1.13 2 1.13 2h2.14l1.13-2-1.13-2zm10.02-6-1.13 2 1.13 2h2.14l1.13-2-1.13-2zm-5.02-3L9.8 5.98 10.94 8h2.12l1.14-2.02L13.08 4zm5.02 9-1.13 2 1.13 2h2.14l1.13-2-1.13-2z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
