import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'YardOutlinedIcon',
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
              d: 'M18 13c-3.31 0-6 2.69-6 6 3.31 0 6-2.69 6-6M6 13c0 3.31 2.69 6 6 6 0-3.31-2.69-6-6-6m2-1.97c0 .86.7 1.56 1.56 1.56.33 0 .63-.1.89-.28l-.01.12c0 .86.7 1.56 1.56 1.56s1.56-.7 1.56-1.56l-.01-.12c.25.17.56.28.89.28.86 0 1.56-.7 1.56-1.56 0-.62-.37-1.16-.89-1.41.52-.24.89-.78.89-1.4 0-.86-.7-1.56-1.56-1.56-.33 0-.63.1-.89.28l.01-.12c0-.86-.7-1.56-1.56-1.56s-1.56.7-1.56 1.56l.01.12c-.25-.18-.56-.28-.89-.28-.86 0-1.56.7-1.56 1.56 0 .62.37 1.16.89 1.41-.52.24-.89.78-.89 1.4m4-2.97c.86 0 1.56.7 1.56 1.56s-.7 1.56-1.56 1.56-1.56-.7-1.56-1.56.7-1.56 1.56-1.56M20 4v16H4V4zm0-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
