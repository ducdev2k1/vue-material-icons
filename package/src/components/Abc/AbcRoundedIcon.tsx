import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AbcRoundedIcon',
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
              d: 'M7.25 15c-.41 0-.75-.34-.75-.75v-.75h-2v.75c0 .41-.34.75-.75.75S3 14.66 3 14.25V10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4.25c0 .41-.34.75-.75.75m-.75-4.5h-2V12h2zm7 1.5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1M11 10.5v.75h2v-.75zm2 2.25h-2v.75h2zm8-2.5c0 .41-.34.75-.75.75-.33 0-.6-.21-.71-.5H17.5v3h2.04c.1-.29.38-.5.71-.5.41 0 .75.34.75.75V14c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
