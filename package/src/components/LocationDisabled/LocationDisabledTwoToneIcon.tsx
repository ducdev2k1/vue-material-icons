import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LocationDisabledTwoToneIcon',
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
              d: 'M23 13v-2h-2.06c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-.98.11-1.91.38-2.77.78l1.53 1.53C10.46 5.13 11.22 5 12 5c3.87 0 7 3.13 7 7 0 .79-.13 1.54-.37 2.24l1.53 1.53c.4-.86.67-1.79.78-2.77zM4.41 2.86 3 4.27l2.04 2.04C3.97 7.62 3.26 9.23 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21l1.41-1.41zM12 19c-3.87 0-7-3.13-7-7 0-1.61.55-3.09 1.46-4.27l9.81 9.81C15.09 18.45 13.61 19 12 19',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
