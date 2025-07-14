import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RuleFolderTwoToneIcon',
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
      'd': 'm11.17 8-2-2H4v12h16V8zm-3.34 8L5 13.17l1.41-1.41 1.41 1.41 3.54-3.54 1.41 1.41zM19 14.59 17.59 16 16 14.41 14.41 16 13 14.59 14.59 13 13 11.41 14.41 10 16 11.59 17.59 10 19 11.41 17.41 13z',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});