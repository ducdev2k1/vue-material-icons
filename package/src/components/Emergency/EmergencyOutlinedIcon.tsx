import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EmergencyOutlinedIcon',
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
              d: 'M21.29 13.9 18 12l3.29-1.9c.48-.28.64-.89.37-1.37l-2-3.46c-.28-.48-.89-.64-1.37-.37L15 6.8V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3.8L5.71 4.9c-.48-.27-1.09-.11-1.37.37l-2 3.46c-.28.48-.11 1.09.37 1.37L6 12l-3.29 1.9c-.48.28-.64.89-.37 1.37l2 3.46c.28.48.89.64 1.37.37L9 17.2V21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3.8l3.29 1.9c.48.28 1.09.11 1.37-.37l2-3.46c.28-.48.11-1.09-.37-1.37m-2.86 2.97-4.68-2.7c-.33-.2-.75.04-.75.43V20h-2v-5.4c0-.38-.42-.63-.75-.43l-4.68 2.7-1-1.73 4.68-2.7c.33-.19.33-.67 0-.87l-4.68-2.7 1-1.73 4.68 2.7c.33.19.75-.05.75-.44V4h2v5.4c0 .38.42.63.75.43l4.68-2.7 1 1.73-4.68 2.7c-.33.19-.33.67 0 .87l4.68 2.7z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
