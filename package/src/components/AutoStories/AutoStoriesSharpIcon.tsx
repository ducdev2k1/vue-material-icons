import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AutoStoriesSharpIcon',
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
              d: 'M21 4.6v12.02c-1.14-.41-2.31-.62-3.5-.62-1.9 0-3.78.54-5.5 1.58V5.48C10.38 4.55 8.51 4 6.5 4S2.62 4.55 1 5.48V20c1.52-1.18 3.43-2 5.5-2s3.98.82 5.5 2c1.52-1.18 3.43-2 5.5-2s3.98.82 5.5 2V5.48c-.63-.36-1.3-.64-2-.88',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
