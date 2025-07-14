import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VolumeDownAltIcon',
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
      'd': 'M14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02S15.48 8.71 14 7.97M3 9v6h4l5 5V4L7 9z'
    }
  }
],
        props,
        attrs
      );
  },
});