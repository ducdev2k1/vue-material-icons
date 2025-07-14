import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SettingsInputComponentTwoToneIcon',
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
      'd': 'M11 16c0 .55.45 1 1 1s1-.45 1-1v-2h-2zm-8 0c0 .55.45 1 1 1s1-.45 1-1v-2H3zm16 0c0 .55.45 1 1 1s1-.45 1-1v-2h-2z',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});