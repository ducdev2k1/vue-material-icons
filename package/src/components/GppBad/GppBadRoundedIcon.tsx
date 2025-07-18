import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GppBadRoundedIcon',
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
              d: 'm18.7 4.51-6-2.25c-.45-.17-.95-.17-1.4 0l-6 2.25C4.52 4.81 4 5.55 4 6.39v4.7c0 4.94 3.27 9.57 7.71 10.83.19.05.39.05.57 0C16.73 20.66 20 16.03 20 11.09v-4.7c0-.84-.52-1.58-1.3-1.88m-3.9 10.28c-.39.39-1.02.39-1.41.01L12 13.42l-1.39 1.38c-.39.39-1.02.39-1.41 0a.996.996 0 0 1 0-1.41L10.59 12 9.2 10.61a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L12 10.59l1.39-1.39c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41L13.42 12l1.38 1.38c.39.39.39 1.02 0 1.41',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
