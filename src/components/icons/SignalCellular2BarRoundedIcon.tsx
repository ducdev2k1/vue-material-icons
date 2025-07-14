import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignalCellular2BarRoundedIcon',
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
      'fillOpacity': '.3',
      'd': 'M4.41 22H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71z'
    }
  },
  {
    'tag': 'path',
    'props': {
      'd': 'M14 10L3.71 20.29c-.63.63-.19 1.71.7 1.71H14V10z'
    }
  }
],
        props,
        attrs
      );
  },
});