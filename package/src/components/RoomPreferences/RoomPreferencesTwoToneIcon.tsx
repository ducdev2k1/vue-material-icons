import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RoomPreferencesTwoToneIcon',
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
              d: 'M13 12.11V5H7v14h4.29c-.19-.63-.29-1.3-.29-2 0-1.91.76-3.63 2-4.89M10 11h2v2h-2z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
