import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DeveloperModeSharpIcon',
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
              d: 'M7 5h10v2h2V1.01L5 1v6h2zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17zM10 15.17 6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59zM17 19H7v-2H5v6h14v-6h-2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
