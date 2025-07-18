import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextRotationAngleupSharpIcon',
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
              d: 'm16.76 9 1.41 1.41-9.19 9.19 1.41 1.41 9.19-9.19L21 13.24V9zm-8.28 3.75 3.54-3.54 2.19.92 1.48-1.48L4.56 4.23 3.5 5.29l4.42 11.14 1.48-1.48zm-.82-1.72L5.43 6.16l4.87 2.23z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
