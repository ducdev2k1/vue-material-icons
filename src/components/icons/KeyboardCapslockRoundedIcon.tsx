import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KeyboardCapslockRoundedIcon',
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
              d: 'm12 8.41 3.89 3.89c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L12.71 6.3a.996.996 0 0 0-1.41 0l-4.6 4.59c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0zM7 18h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
