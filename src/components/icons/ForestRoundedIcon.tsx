import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ForestRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M14.14 12h-.06c.81 0 1.28-.91.82-1.57L9.82 3.17c-.4-.57-1.24-.57-1.64 0L3.1 10.43c-.46.66.01 1.57.82 1.57h-.06L.99 16.46c-.43.66.05 1.54.84 1.54H7v2c0 1.1.9 2 2 2s2-.9 2-2v-2h5.17c.79 0 1.27-.88.84-1.54z',
        props,
        attrs
      );
  },
});