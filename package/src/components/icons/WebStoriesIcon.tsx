import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WebStoriesIcon',
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
      'd': 'M17 4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2zM2 20c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2zm19-2c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5z'
    }
  }
],
        props,
        attrs
      );
  },
});