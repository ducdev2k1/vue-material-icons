import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoFlashRoundedIcon',
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
              d: 'M3.16 3.16a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.6 4.6-.21.23H3.6c-.88 0-1.6.72-1.6 1.6v9.4c0 .88.72 1.6 1.6 1.6h12.8c.75 0 1.38-.52 1.55-1.22l1.47 1.47c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41zM10 20c-2.21 0-4-1.79-4-4 0-1.95 1.4-3.57 3.25-3.92l1.57 1.57c-.26-.09-.53-.15-.82-.15-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5c0-.29-.06-.56-.15-.82l1.57 1.57C13.57 18.6 11.95 20 10 20m8-4.83L10.83 8h.87c.56 0 1.1.24 1.48.65l.69.75h2.54c.88 0 1.6.72 1.6 1.6v4.17zm2.4-9.57h.75c.38 0 .62.41.44.74L19 11V7h-.5c-.28 0-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5h2.73c.36 0 .6.37.46.7z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
