import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'QueuePlayNextRoundedIcon',
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
              d: 'M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v6c0 .55.45 1 1 1s1-.45 1-1V5c0-1.1-.9-2-2-2m-8 7V8c0-.55-.45-1-1-1s-1 .45-1 1v2H9c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1zm10.29 8.71-3.04 3.04c-.41.41-1.09.41-1.5 0s-.41-1.09 0-1.5L21 18l-2.25-2.25c-.41-.41-.41-1.09 0-1.5s1.09-.41 1.5 0l3.04 3.04c.39.39.39 1.03 0 1.42',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
