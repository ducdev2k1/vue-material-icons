import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WifiCalling3OutlinedIcon',
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
              d: 'M16.49 4.5c1.79 0 3.42.73 4.59 1.91l1.06-1.06C20.7 3.9 18.7 3 16.49 3s-4.21.9-5.66 2.34l1.06 1.06c1.19-1.17 2.81-1.9 4.6-1.9',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
