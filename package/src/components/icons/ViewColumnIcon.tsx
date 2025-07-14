import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ViewColumnIcon',
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
      'd': 'M14.67 5v14H9.33V5zm1 14H21V5h-5.33zm-7.34 0V5H3v14z'
    }
  }
],
        props,
        attrs
      );
  },
});