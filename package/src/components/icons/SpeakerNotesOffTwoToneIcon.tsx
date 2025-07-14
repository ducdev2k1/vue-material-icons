import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SpeakerNotesOffTwoToneIcon',
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
      'd': 'M6 11V9L4 7v10.17L5.17 16H13l-5-5zm2 3H6v-2h2zM20 4H6.66L10 7.34V6h8v2h-7.34l1 1H18v2h-4.34l5 5H20z',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});