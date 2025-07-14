import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SyncAltIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm18 12 4-4-4-4v3H3v2h15zM6 12l-4 4 4 4v-3h15v-2H6z',
        props,
        attrs
      );
  },
});