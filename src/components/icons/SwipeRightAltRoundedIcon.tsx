import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SwipeRightAltRoundedIcon',
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
      'd': 'M13.9 11c-.46-2.28-2.48-4-4.9-4-2.76 0-5 2.24-5 5s2.24 5 5 5c2.42 0 4.44-1.72 4.9-4h4.27l-.88.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l2.59-2.59c.39-.39.39-1.02 0-1.41L18.7 8.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l.88.89z'
    }
  }
],
        props,
        attrs
      );
  },
});