import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SettingsInputCompositeTwoToneIcon',
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
      'd': 'M3 16c0 .55.45 1 1 1s1-.45 1-1v-2H3zm8 0c0 .55.45 1 1 1s1-.45 1-1v-2h-2zm8 0c0 .55.45 1 1 1s1-.45 1-1v-2h-2z',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});