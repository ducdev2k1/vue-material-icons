import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SettingsRemoteRoundedIcon',
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
      'd': 'M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1m-3 5.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25M7.82 6.82c.35.35.9.38 1.3.1C9.93 6.34 10.93 6 12 6s2.07.34 2.88.91c.4.28.95.26 1.3-.09.43-.43.39-1.15-.09-1.5C14.94 4.49 13.53 4 12 4s-2.94.49-4.09 1.32c-.49.35-.52 1.07-.09 1.5'
    }
  }
],
        props,
        attrs
      );
  },
});