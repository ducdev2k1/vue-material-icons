import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextRotationDownIcon',
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
    'tag': 'path',
    'props': {
      'd': 'M21 12v-1.5L10 5.75v2.1l2.2.9v5l-2.2.9v2.1zm-7-2.62 5.02 1.87L14 13.12zM6 19.75l3-3H7V4.25H5v12.5H3z'
    }
  }
],
        props,
        attrs
      );
  },
});