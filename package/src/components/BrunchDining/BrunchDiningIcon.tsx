import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BrunchDiningIcon',
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
              d: 'M18 8h2V4h-2zm-2.49 14H2.49c-.27 0-.49-.22-.49-.5V20h14v1.5c0 .28-.22.5-.49.5M18 15.89l-.4-.42c-1.02-1.08-1.6-2.52-1.6-4V2h6v9.51c0 1.46-.54 2.87-1.53 3.94l-.47.52V20h2v2h-4zM7 16v-2h4v2h4.5c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5h-13c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
