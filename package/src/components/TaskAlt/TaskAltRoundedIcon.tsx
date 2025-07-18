import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TaskAltRoundedIcon',
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
              d: 'm21.29 5.89-10 10c-.39.39-1.02.39-1.41 0l-2.83-2.83a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l2.12 2.12 9.29-9.29c.39-.39 1.02-.39 1.41 0 .4.39.4 1.02.01 1.41m-5.52-3.15c-1.69-.69-3.61-.93-5.61-.57-4.07.73-7.32 4.01-8.01 8.08C1.01 17 6.63 22.78 13.34 21.91c3.96-.51 7.28-3.46 8.32-7.31.4-1.47.44-2.89.21-4.22-.13-.8-1.12-1.11-1.7-.54-.23.23-.33.57-.27.89.22 1.33.12 2.75-.52 4.26-1.16 2.71-3.68 4.7-6.61 4.97-5.1.47-9.33-3.85-8.7-8.98.43-3.54 3.28-6.42 6.81-6.91 1.73-.24 3.37.09 4.77.81.39.2.86.13 1.17-.18.48-.48.36-1.29-.24-1.6-.27-.12-.54-.25-.81-.36',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
