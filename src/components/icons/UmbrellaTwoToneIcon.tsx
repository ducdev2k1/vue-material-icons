import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UmbrellaTwoToneIcon',
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
      'd': 'm13.28 8.5.76.58.92-.23L13 14.8V8.29zm-4.25.36L11 14.8V8.29l-.28.21-.76.59z',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});