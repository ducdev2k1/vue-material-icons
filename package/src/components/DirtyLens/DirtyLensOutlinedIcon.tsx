import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DirtyLensOutlinedIcon',
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
              d: 'M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 14h-7.02c-.22-.84-.52-1.76-.13-2.33.81-1.12 2.67 1.77 3.81-.09.77-1.57-1.58-1.29-1.64-2.12-.05-.84 3.68.17 3.04-1.66-.61-1.73-2.42.48-2.76-.53-.58-1.74 4.7-1.68 2.85-4.01-1.76-2.22-2.47 2.85-4.41 2.33-1.34-.36-1.01-2.88-2.65-2.44-1.88.51 1.03 2.2 0 2.86-.96.63-1.72-.92-2.51-1.19-.2-.07-.69-.05-.91.19-.78.86.28 1.16.25 1.91-.02.75-1.59.49-1.51 1.49.12 1.6 2.18.45 2.4 1.24.55 1.98-1.89 2.15-.5 3.27 1.53.71 1.91-1.94 2.8-1.35.58.38.3 1.45.16 2.43H4V7h4.05l1.83-2h4.24l1.83 2H20z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
