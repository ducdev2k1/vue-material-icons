import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoMeetingRoomRoundedIcon',
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
              d: 'M14 6h3v7.88l2 2V5c0-.55-.45-1-1-1h-4c0-.55-.45-1-1-1H6.12L14 10.88zm7.17 14.88L12 11.71V13h-2v-2h1.29L3.12 2.83a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L5 7.54V19H4c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1v-3.46l5.75 5.75c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
