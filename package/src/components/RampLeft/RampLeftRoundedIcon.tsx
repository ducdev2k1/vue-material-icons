import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RampLeftRoundedIcon',
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
              d: 'M12 21c-.55 0-1-.45-1-1V6.83l-.88.88c-.39.39-1.02.39-1.41 0a.996.996 0 0 1 0-1.41l2.59-2.59c.39-.39 1.02-.39 1.41 0L15.3 6.3c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L13 6.83V9c0 3.62 2.89 6.22 4.97 7.62.52.35.59 1.09.14 1.53-.33.33-.87.4-1.26.13-1.59-1.06-2.89-2.28-3.85-3.59v5.3c0 .56-.45 1.01-1 1.01',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
