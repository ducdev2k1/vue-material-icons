import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BakeryDiningIcon',
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
              fillRule: 'evenodd',
              d: 'M19.28 16.34c-1.21-.89-1.82-1.34-1.82-1.34s.32-.59.96-1.78c.38-.59 1.22-.59 1.6 0l.81 1.26c.19.3.21.68.06 1l-.22.47c-.25.54-.91.72-1.39.39m-14.56 0c-.48.33-1.13.15-1.39-.38l-.23-.47c-.15-.32-.13-.7.06-1l.81-1.26c.38-.59 1.22-.59 1.6 0 .65 1.18.97 1.77.97 1.77s-.61.45-1.82 1.34m10.64-6.97c.09-.68.73-1.06 1.27-.75l1.59.9c.46.26.63.91.36 1.41L16.5 15h-1.8zm-6.73 0L9.3 15H7.5l-2.09-4.08c-.27-.5-.1-1.15.36-1.41l1.59-.9c.53-.3 1.18.08 1.27.76M13.8 15h-3.6l-.74-6.88c-.07-.59.35-1.12.88-1.12h3.3c.53 0 .94.53.88 1.12z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
