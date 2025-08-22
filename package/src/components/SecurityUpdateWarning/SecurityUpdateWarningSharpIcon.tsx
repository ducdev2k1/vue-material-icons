import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SecurityUpdateWarningSharpIcon',
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
              d: 'M11 15h2v2h-2zm0-8h2v6h-2z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M5.01 1v22H19V1zM17 18H7V6h10z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
