import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DownloadDoneRoundedIcon',
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
            tag: 'path',
            props: {
              d: 'M6 18h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1m5.01-4.1c-.78.77-2.04.77-2.82-.01L6 11.7c-.55-.55-.54-1.44.03-1.97.54-.52 1.4-.5 1.92.02L9.6 11.4l6.43-6.43c.54-.54 1.41-.54 1.95 0l.04.04c.54.54.54 1.42-.01 1.96z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
