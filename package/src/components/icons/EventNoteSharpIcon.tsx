import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EventNoteSharpIcon',
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
              d: 'M17 10H7v2h10zm4-7h-3V1h-2v2H8V1H6v2H3v18h18zm-2 16H5V8h14zm-5-5H7v2h7z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
