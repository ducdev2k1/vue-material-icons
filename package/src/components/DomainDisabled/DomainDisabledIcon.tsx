import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DomainDisabledIcon',
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
              d: 'M8 5h2v2h-.9L12 9.9V9h8v8.9l2 2V7H12V3H5.1L8 5.9zm8 6h2v2h-2zM1.3 1.8.1 3.1 2 5v16h16l3 3 1.3-1.3zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm4 8H8v-2h2zm0-4H8v-2h2zm2 4v-2h2l2 2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
