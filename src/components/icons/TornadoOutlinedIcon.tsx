import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TornadoOutlinedIcon',
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
      'd': 'M23 3H1l11 19zm-3.47 2-1.74 3H6.21L4.47 5zm-9.27 10h3.48L12 18.01zm4.64-2H9.1l-1.74-3h9.27z'
    }
  }
],
        props,
        attrs
      );
  },
});