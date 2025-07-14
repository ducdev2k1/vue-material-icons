import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavigationOutlinedIcon',
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
              d: 'm12 7.27 4.28 10.43-3.47-1.53-.81-.36-.81.36-3.47 1.53zM12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
