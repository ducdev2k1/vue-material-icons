import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LocationOffOutlinedIcon',
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
              d: 'M12 4c2.76 0 5 2.24 5 5 0 1.06-.39 2.32-1 3.62l1.49 1.49C18.37 12.36 19 10.57 19 9c0-3.87-3.13-7-7-7-1.84 0-3.5.71-4.75 1.86l1.43 1.43C9.56 4.5 10.72 4 12 4m0 2.5c-.59 0-1.13.21-1.56.56l3.5 3.5c.35-.43.56-.97.56-1.56 0-1.38-1.12-2.5-2.5-2.5M3.41 2.86 2 4.27l3.18 3.18C5.07 7.95 5 8.47 5 9c0 5.25 7 13 7 13s1.67-1.85 3.38-4.35L18.73 21l1.41-1.41zM12 18.88c-2.01-2.58-4.8-6.74-4.98-9.59l6.92 6.92c-.65.98-1.33 1.89-1.94 2.67',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
