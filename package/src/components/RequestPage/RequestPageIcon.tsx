import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RequestPageIcon',
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
              d: 'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zm1 9h-4v1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-1v1h-2v-1H9v-2h4v-1h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1V8h2v1h2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
