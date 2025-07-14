import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UnarchiveTwoToneIcon',
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
      'd': 'M5 19h14V8H5zm7-9 4 4h-2.55v3h-2.91v-3H8z',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});