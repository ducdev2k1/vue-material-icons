import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StraightenRoundedIcon',
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
              d: 'M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-1 10H4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h1v3c0 .55.45 1 1 1s1-.45 1-1V8h2v3c0 .55.45 1 1 1s1-.45 1-1V8h2v3c0 .55.45 1 1 1s1-.45 1-1V8h2v3c0 .55.45 1 1 1s1-.45 1-1V8h1c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
