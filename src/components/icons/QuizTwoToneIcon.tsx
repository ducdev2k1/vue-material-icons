import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'QuizTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M8 4v12h12V4zm6.74 10.69c-.2.21-.44.31-.73.31s-.54-.1-.74-.31c-.21-.21-.31-.45-.31-.74s.1-.54.31-.74.45-.3.74-.3.54.1.74.3.3.45.3.74-.11.54-.31.74m1.77-5.86c-.23.34-.54.69-.92 1.06-.3.27-.51.52-.64.75q-.18.345-.18.78v.4h-1.52v-.56c0-.42.09-.78.26-1.09.18-.32.49-.67.95-1.07.32-.29.55-.54.69-.74q.21-.3.21-.72 0-.54-.36-.87c-.24-.23-.57-.34-.99-.34-.4 0-.72.12-.97.36s-.42.53-.53.87l-1.37-.57c.18-.55.52-1.03 1-1.45.49-.43 1.11-.64 1.85-.64.56 0 1.05.11 1.49.33q.66.33 1.02.93c.24.4.36.84.36 1.33s-.11.9-.35 1.24',
        props,
        attrs
      );
  },
});