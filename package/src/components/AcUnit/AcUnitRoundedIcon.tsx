import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AcUnitRoundedIcon',
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
              d: 'M21 11h-3.17l2.54-2.54c.39-.39.39-1.02 0-1.41s-1.03-.39-1.42 0L15 11h-2V9l3.95-3.95c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0L13 6.17V3c0-.55-.45-1-1-1s-1 .45-1 1v3.17L8.46 3.63a.996.996 0 0 0-1.41 0c-.39.39-.39 1.03 0 1.42L11 9v2H9L5.05 7.05c-.39-.39-1.03-.39-1.42 0s-.39 1.02 0 1.41L6.17 11H3c-.55 0-1 .45-1 1s.45 1 1 1h3.17l-2.54 2.54c-.39.39-.39 1.02 0 1.41s1.03.39 1.42 0L9 13h2v2l-3.95 3.95c-.39.39-.39 1.03 0 1.42s1.02.39 1.41 0L11 17.83V21c0 .55.45 1 1 1s1-.45 1-1v-3.17l2.54 2.54c.39.39 1.02.39 1.41 0s.39-1.03 0-1.42L13 15v-2h2l3.95 3.95c.39.39 1.03.39 1.42 0s.39-1.02 0-1.41L17.83 13H21c.55 0 1-.45 1-1s-.45-1-1-1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
