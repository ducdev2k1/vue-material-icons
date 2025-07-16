import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KeyboardBackspaceRoundedIcon',
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
              d: 'M20 11H6.83l2.88-2.88c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0L3.71 11.3c-.39.39-.39 1.02 0 1.41L8.3 17.3c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L6.83 13H20c.55 0 1-.45 1-1s-.45-1-1-1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
