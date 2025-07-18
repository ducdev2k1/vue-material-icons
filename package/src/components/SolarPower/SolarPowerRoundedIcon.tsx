import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SolarPowerRoundedIcon',
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
              d: 'M3.33 16H11v-3H5.6c-.94 0-1.75.65-1.95 1.57zM13 16h7.67l-.32-1.43c-.21-.92-1.02-1.57-1.95-1.57H13zm8.11 2H13v4h6.51c1.28 0 2.23-1.18 1.95-2.43zM4.49 22H11v-4H2.89l-.35 1.57C2.26 20.82 3.21 22 4.49 22M12 8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1s1-.45 1-1V9c0-.55-.45-1-1-1m6.59.62c.39-.39.39-1.02 0-1.41l-.71-.71a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l.71.71c.39.39 1.02.39 1.41 0m-11.77 0 .71-.71c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0l-.71.7c-.39.39-.39 1.02 0 1.41.39.4 1.02.4 1.41.01M5 2H4c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1m15 0h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1m-8 5c2.76 0 5-2.24 5-5H7c0 2.76 2.24 5 5 5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
