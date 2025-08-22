import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KeyboardDoubleArrowRightRoundedIcon',
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
              d: 'M5.7 6.71c-.39.39-.39 1.02 0 1.41L9.58 12 5.7 15.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L7.12 6.71c-.39-.39-1.03-.39-1.42 0',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M12.29 6.71c-.39.39-.39 1.02 0 1.41L16.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L13.7 6.7c-.38-.38-1.02-.38-1.41.01',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
