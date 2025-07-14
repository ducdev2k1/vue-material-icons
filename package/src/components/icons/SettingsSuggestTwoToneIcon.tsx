import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SettingsSuggestTwoToneIcon',
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
      'd': 'M14.07 15.23q.18-.585.18-1.23t-.18-1.23l1.49-1.13-.73-1.27-1.73.73c-.56-.6-1.3-1.04-2.13-1.23L10.73 8H9.27l-.24 1.86c-.83.19-1.57.63-2.13 1.23l-1.73-.73-.73 1.27 1.49 1.13q-.18.585-.18 1.23t.18 1.23l-1.49 1.13.73 1.27 1.73-.73c.56.6 1.3 1.04 2.13 1.23L9.27 20h1.47l.23-1.86c.83-.19 1.57-.63 2.13-1.23l1.73.73.73-1.27zM10 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});