import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AudioFileOutlinedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zM6 20V4h7v5h5v11zm10-9h-4v3.88c-.36-.24-.79-.38-1.25-.38-1.24 0-2.25 1.01-2.25 2.25S9.51 19 10.75 19 13 17.99 13 16.75V13h3z',
        props,
        attrs
      );
  },
});