import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LightModeSharpIcon',
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
              d: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m-1-6v4h2V1zm0 18v4h2v-4zm12-8h-4v2h4zM5 11H1v2h4zm11.24 6.66 2.47 2.47 1.41-1.41-2.47-2.47zM3.87 5.28l2.47 2.47 1.41-1.41-2.47-2.47zm2.47 10.96-2.47 2.47 1.41 1.41 2.47-2.47zM18.72 3.87l-2.47 2.47 1.41 1.41 2.47-2.47z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
