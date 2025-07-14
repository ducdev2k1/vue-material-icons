import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UnfoldLessDoubleOutlinedIcon',
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
      'd': 'M16.58 1.41 15.16 0l-3.17 3.17L8.82 0 7.41 1.41 11.99 6z'
    }
  }
],
        props,
        attrs
      );
  },
});