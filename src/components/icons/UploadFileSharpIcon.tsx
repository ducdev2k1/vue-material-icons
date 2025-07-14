import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UploadFileSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M14 2H4v20h16V8zm-1 13v4h-2v-4H8l4.01-4L16 15zm0-6V3.5L18.5 9z',
        props,
        attrs
      );
  },
});