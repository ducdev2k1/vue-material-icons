import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SnoozeIcon',
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
              d: 'M7.88 3.39 6.6 1.86 2 5.71l1.29 1.53zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9m0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7m-3-9h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
