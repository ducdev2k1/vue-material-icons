import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PieChartOutlineTwoToneIcon',
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
              d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-1 17.94c-3.93-.5-7-3.88-7-7.94s3.07-7.44 7-7.93zm2-.01V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93M13 11V4.07c3.61.45 6.48 3.33 6.93 6.93z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
