import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChangeCircleTwoToneIcon',
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
              d: 'M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m.06 9.34v2.14c-.92.02-1.84-.31-2.54-1.01-1.12-1.12-1.3-2.8-.59-4.13l-1.1-1.1c-1.28 1.94-1.07 4.59.64 6.29.97.98 2.25 1.47 3.53 1.47h.06v2l2.83-2.83zm3.48-4.88c-.99-.99-2.3-1.46-3.6-1.45V5L9.11 7.83l2.83 2.83V8.51H12c.9 0 1.79.34 2.48 1.02 1.12 1.12 1.3 2.8.59 4.13l1.1 1.1c1.28-1.94 1.07-4.59-.63-6.3',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
