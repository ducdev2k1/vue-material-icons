import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SpeakerNotesTwoToneIcon',
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
      'd': 'm4 17.17.59-.59.58-.58H20V4H4zM10 6h8v2h-8zm0 3h8v2h-8zm0 3h5v2h-5zM6 6h2v2H6zm0 3h2v2H6zm0 3h2v2H6z',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});