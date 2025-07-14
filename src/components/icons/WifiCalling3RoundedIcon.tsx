import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WifiCalling3RoundedIcon',
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
      'd': 'M21.54 4.8C20.17 3.67 18.41 3 16.49 3s-3.67.67-5.05 1.8c-.34.28-.36.79-.05 1.1l.01.01c.27.27.7.29 1 .05 1.12-.91 2.54-1.45 4.09-1.45s2.97.55 4.09 1.45c.3.24.73.23 1-.05l.01-.01c.31-.31.29-.83-.05-1.1'
    }
  }
],
        props,
        attrs
      );
  },
});