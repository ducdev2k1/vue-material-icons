import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WarningTwoToneIcon',
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
      'd': 'M4.47 19h15.06L12 5.99zM13 18h-2v-2h2zm0-4h-2v-4h2z',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});