import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DynamicFormSharpIcon',
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
              d: 'M17 20v-9h-2V4h7l-2 5h2zm-2-7v7H2v-7zm-8.75 2.75h-1.5v1.5h1.5zM13 4v7H2V4zM6.25 6.75h-1.5v1.5h1.5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
