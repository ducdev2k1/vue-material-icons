import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SettingsPowerRoundedIcon',
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
              d: 'M8 24c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m0-22c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1m3.94 3.06-.02.02c-.41.41-.36 1.08.08 1.46 1.51 1.34 2.33 3.43 1.88 5.7-.46 2.28-2.29 4.14-4.56 4.62C9.43 17.69 6 14.74 6 11c0-1.78.78-3.37 2.01-4.47.43-.39.47-1.04.07-1.45l-.02-.02c-.37-.37-.96-.39-1.36-.04-2.01 1.77-3.12 4.53-2.56 7.52.59 3.15 3.11 5.7 6.26 6.31 5.12.99 9.6-2.9 9.6-7.85 0-2.38-1.05-4.52-2.71-5.99-.39-.34-.98-.32-1.35.05M16 24c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
