import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignalCellular3BarSharpIcon',
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
      'd': 'M2 22h20V2L2 22z'
    }
  },
  {
    'tag': 'path',
    'props': {
      'd': 'M17 7L2 22h15V7z'
    }
  }
],
        props,
        attrs
      );
  },
});