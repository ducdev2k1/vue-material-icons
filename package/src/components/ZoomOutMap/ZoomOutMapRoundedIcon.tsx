import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ZoomOutMapRoundedIcon',
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
              d: 'M15.85 3.85 17.3 5.3l-2.18 2.16c-.39.39-.39 1.03 0 1.42s1.03.39 1.42 0L18.7 6.7l1.45 1.45c.31.31.85.09.85-.36V3.5c0-.28-.22-.5-.5-.5h-4.29c-.45 0-.67.54-.36.85m-12 4.3L5.3 6.7l2.16 2.18c.39.39 1.03.39 1.42 0s.39-1.03 0-1.42L6.7 5.3l1.45-1.45c.31-.31.09-.85-.36-.85H3.5c-.28 0-.5.22-.5.5v4.29c0 .45.54.67.85.36m4.3 12L6.7 18.7l2.18-2.16c.39-.39.39-1.03 0-1.42s-1.03-.39-1.42 0L5.3 17.3l-1.45-1.45c-.31-.31-.85-.09-.85.36v4.29c0 .28.22.5.5.5h4.29c.45 0 .67-.54.36-.85m12-4.3L18.7 17.3l-2.16-2.18c-.39-.39-1.03-.39-1.42 0s-.39 1.03 0 1.42l2.18 2.16-1.45 1.45c-.31.31-.09.85.36.85h4.29c.28 0 .5-.22.5-.5v-4.29c0-.45-.54-.67-.85-.36',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
