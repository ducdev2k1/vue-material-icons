import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'QueryStatsRoundedIcon',
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
              d: 'M19.88 18.47c.48-.77.75-1.67.69-2.66-.13-2.15-1.84-3.97-3.97-4.2-2.72-.3-5.02 1.81-5.02 4.47 0 2.49 2.01 4.5 4.49 4.5.88 0 1.7-.26 2.39-.7l2.41 2.41c.39.39 1.03.39 1.42 0s.39-1.03 0-1.42zm-3.8.11c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5m-.36-8.5c-.74.02-1.45.18-2.1.45l-.55-.83-3.08 5.01c-.36.58-1.17.64-1.61.13l-2.12-2.47-3.06 4.9c-.31.49-.97.62-1.44.28-.42-.31-.54-.89-.26-1.34l3.78-6.05c.36-.57 1.17-.63 1.61-.12L9 12.5l3.18-5.17c.38-.62 1.28-.64 1.68-.03zm2.59.5c-.64-.28-1.33-.45-2.05-.49L20.8 2.9c.31-.49.97-.61 1.43-.27.43.31.54.9.26 1.34z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
