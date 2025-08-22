import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TypeSpecimenSharpIcon',
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
              d: 'M4 6H2v16h16v-2H4z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M22 2H6v16h16zm-5.37 12.5-.8-2.3H12.2l-.82 2.3H9.81l3.38-9h1.61l3.38 9z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm13.96 7.17-1.31 3.72h2.69l-1.3-3.72z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
