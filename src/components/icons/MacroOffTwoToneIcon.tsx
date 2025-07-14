import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MacroOffTwoToneIcon',
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
              d: 'm10.11 5.69-.81-.56c-.18-.13-.41-.2-.64-.2-.25 0-.47.1-.66.24l1.39 1.39c.18-.33.43-.63.72-.87m5.72 3.21-.88-.42c-.12.73-.51 1.36-1.05 1.82l.8.57c.18.13.4.2.64.2.47 0 .87-.28 1.05-.69.06-.14.09-.28.09-.44.01-.45-.25-.84-.65-1.04m-1.94-3.22c.55.46.94 1.1 1.06 1.84l.87-.42c.41-.2.66-.59.66-1.03 0-.63-.51-1.14-1.14-1.14-.24 0-.46.07-.64.2zM12 5c.36 0 .71.07 1.03.19l.11-1.09C13.12 3.49 12.62 3 12 3s-1.12.49-1.14 1.1l.12 1.09C11.3 5.07 11.64 5 12 5m3.94 13.77-.71-.71c-.32.47-.59.97-.79 1.5.54-.2 1.04-.47 1.5-.79m-10.5-3.33c.71 1.9 2.22 3.41 4.12 4.12-.71-1.9-2.22-3.41-4.12-4.12',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
