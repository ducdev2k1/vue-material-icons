import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BroadcastOnHomeRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M22 6c0-1.1-.9-2-2-2H5c-.55 0-1 .45-1 1s.45 1 1 1h15v2.59c.73.29 1.4.69 2 1.17zM8 9H3c-.5 0-1 .5-1 1v9c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-9c0-.5-.5-1-1-1m-1 9H4v-7h3zm10.75-1.03c.3-.23.5-.57.5-.97 0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25 1.25c0 .4.2.75.5.97v4.28c0 .41.34.75.75.75s.75-.34.75-.75z',
        props,
        attrs
      );
  },
});