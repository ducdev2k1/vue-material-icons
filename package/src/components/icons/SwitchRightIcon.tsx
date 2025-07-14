import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SwitchRightIcon',
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
      'd': 'M15.5 15.38V8.62L18.88 12zM14 19l7-7-7-7zm-4 0V5l-7 7z'
    }
  }
],
        props,
        attrs
      );
  },
});