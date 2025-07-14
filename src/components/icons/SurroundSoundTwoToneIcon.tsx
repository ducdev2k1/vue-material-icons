import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SurroundSoundTwoToneIcon',
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
      'd': 'M4 18h16V6H4zM16.94 7.06C18.32 8.41 19 10.21 19 12s-.68 3.59-2.05 4.95l-1.23-1.23c1.02-1.03 1.53-2.37 1.53-3.72s-.52-2.69-1.54-3.71zM12 8.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5M7.05 7.05l1.23 1.23C7.27 9.31 6.75 10.65 6.75 12s.52 2.69 1.54 3.71l-1.23 1.23C5.68 15.59 5 13.79 5 12s.68-3.59 2.05-4.95',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});