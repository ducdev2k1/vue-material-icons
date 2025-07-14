import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TramTwoToneIcon',
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
      'd': 'M12.97 7h-1.94c-2.75.08-3.62.58-3.9 1h9.74c-.28-.42-1.15-.92-3.9-1M7 16v1c0 .45.3.84.74.95h3.11c-.22-.26-.35-.59-.35-.95 0-.39.15-.73.39-1zm6.5 1c0 .36-.13.69-.35.95h3.11c.44-.11.74-.5.74-.95v-1h-3.89c.24.27.39.61.39 1',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});