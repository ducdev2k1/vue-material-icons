import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AccessAlarmRoundedIcon',
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
              d: 'm15.87 15.25-3.37-2V8.72c0-.4-.32-.72-.72-.72h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l3.65 2.19c.34.2.78.1.98-.24.21-.35.1-.8-.25-1m5.31-10.24L18.1 2.45c-.42-.35-1.05-.3-1.41.13-.35.42-.29 1.05.13 1.41l3.07 2.56c.42.35 1.05.3 1.41-.13.36-.42.3-1.05-.12-1.41M4.1 6.55l3.07-2.56c.43-.36.49-.99.13-1.41-.35-.43-.98-.48-1.4-.13L2.82 5.01c-.42.36-.48.99-.12 1.41.35.43.98.48 1.4.13M12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
