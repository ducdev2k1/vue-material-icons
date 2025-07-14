import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignalCellular1BarIcon',
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
      'd': 'M2 22h20V2z'
    }
  },
  {
    'tag': 'path',
    'props': {
      'd': 'M12 12L2 22h10z'
    }
  }
],
        props,
        attrs
      );
  },
});