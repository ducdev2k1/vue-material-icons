import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MonitorHeartTwoToneIcon',
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
              d: 'M15.11 12.45 14 10.24l-3.11 6.21c-.17.34-.51.55-.89.55s-.72-.21-.89-.55L7.38 13H2v2h2v3h16v-3h2v-2h-6c-.38 0-.72-.21-.89-.55',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
