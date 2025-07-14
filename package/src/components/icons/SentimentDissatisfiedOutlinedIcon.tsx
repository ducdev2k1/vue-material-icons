import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SentimentDissatisfiedOutlinedIcon',
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
    'tag': 'circle',
    'props': {
      'cx': '15.5',
      'cy': '9.5',
      'r': '1.5'
    }
  }
],
        props,
        attrs
      );
  },
});