import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FaceRetouchingNaturalSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M19.85 10.59C20.79 15.4 17.01 20 12 20c-4.41 0-8-3.59-8-8 0-.39 3.87-1.12 5.74-5.69 3.42 4.19 8.07 3.73 9.09 3.59l-1.48-3.25-4.72-2.15 3.5-1.59C9.51-.14 2 4.77 2 12c0 5.52 4.48 10 10 10 7.21 0 12.12-7.45 9.1-14.13z',
        props,
        attrs
      );
  },
});