import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FlareRoundedIcon',
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
              d: 'M6 11H2c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1m2.47-3.94-.72-.72a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l.71.71c.39.39 1.02.39 1.41 0 .39-.38.39-1.02.01-1.4M12 1c-.56 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1m5.66 5.35a.996.996 0 0 0-1.41 0l-.71.71c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l.71-.71c.38-.39.38-1.03 0-1.41M17 12c0 .56.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1m-5-3c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m3.53 7.94.71.71c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-.71-.71a.996.996 0 0 0-1.41 0c-.38.39-.38 1.03 0 1.41m-9.19.71c.39.39 1.02.39 1.41 0l.71-.71c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0l-.71.71c-.38.39-.38 1.03 0 1.41M12 23c.56 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
