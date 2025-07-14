import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RingVolumeTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M18.6 17.22c.66.37 1.28.79 1.87 1.27l1.07-1.07c-.91-.75-1.9-1.38-2.94-1.9zM3.53 18.5c.58-.47 1.21-.89 1.87-1.27v-1.71c-1.05.51-2.03 1.15-2.95 1.9z',
        props,
        attrs
      );
  },
});