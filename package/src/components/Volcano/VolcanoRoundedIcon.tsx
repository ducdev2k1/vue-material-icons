import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VolcanoRoundedIcon',
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
              d: 'M16.49 8h-4.14c-.82 0-1.55.5-1.86 1.26L9 13H7.3c-.79 0-1.51.47-1.83 1.19l-2.22 5C2.66 20.51 3.63 22 5.08 22h14.27c1.33 0 2.29-1.27 1.92-2.55l-2.86-10C18.17 8.59 17.38 8 16.49 8M14 1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1m5.66 2.34a.996.996 0 0 0-1.41 0l-1.41 1.41c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l1.41-1.41c.39-.38.39-1.02 0-1.41m-8.49 1.42L9.76 3.34a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0 .39-.38.39-1.01 0-1.4',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
