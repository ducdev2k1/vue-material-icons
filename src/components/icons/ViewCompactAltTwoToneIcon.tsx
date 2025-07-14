import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ViewCompactAltTwoToneIcon',
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
      'd': 'M4 18h16V6H4zm8.5-10.5h4v4h-4zm0 5h4v4h-4zm-5-5h4v4h-4zm0 5h4v4h-4z',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});