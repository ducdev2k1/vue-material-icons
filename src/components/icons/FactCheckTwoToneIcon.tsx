import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FactCheckTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M4 19h16V5H4zm9.41-8.25 1.41 1.42L17.99 9l1.42 1.42L14.82 15 12 12.16zM5 7h5v2H5zm0 4h5v2H5zm0 4h5v2H5z',
        props,
        attrs
      );
  },
});