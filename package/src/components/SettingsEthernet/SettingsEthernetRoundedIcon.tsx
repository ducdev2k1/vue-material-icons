import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SettingsEthernetRoundedIcon',
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
              d: 'M7.71 6.71a.996.996 0 0 0-1.41 0L1.71 11.3c-.39.39-.39 1.02 0 1.41L6.3 17.3c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L3.83 12l3.88-3.88c.38-.39.38-1.03 0-1.41m8.58 0c-.39.39-.39 1.02 0 1.41L20.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L17.7 6.7c-.38-.38-1.02-.38-1.41.01M8 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m4-2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
