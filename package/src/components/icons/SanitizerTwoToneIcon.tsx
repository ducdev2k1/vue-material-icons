import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SanitizerTwoToneIcon',
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
      'd': 'M10 8c-2.21 0-4 1.79-4 4v8h8v-8c0-2.21-1.79-4-4-4m3 8h-2v2H9v-2H7v-2h2v-2h2v2h2z',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});