import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AccountTreeRoundedIcon',
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
              d: 'M17 11h3c1.11 0 2-.9 2-2V5c0-1.11-.9-2-2-2h-3c-1.11 0-2 .9-2 2v1H9.01V5c0-1.11-.9-2-2-2H4c-1.1 0-2 .9-2 2v4c0 1.11.9 2 2 2h3c1.11 0 2-.9 2-2V8h2v7.01c0 1.65 1.34 2.99 2.99 2.99H15v1c0 1.11.9 2 2 2h3c1.11 0 2-.9 2-2v-4c0-1.11-.9-2-2-2h-3c-1.11 0-2 .9-2 2v1h-1.01c-.54 0-.99-.45-.99-.99V8h2v1c0 1.1.9 2 2 2',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
