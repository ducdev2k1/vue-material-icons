import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ControlCameraTwoToneIcon',
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
              d: 'M7.3 13.77 5.54 12l1.76-1.77-1.76-1.77L2 12l3.54 3.54zm8.24 4.69-1.77-1.76L12 18.46l-1.77-1.76-1.77 1.76L12 22zm2.92-2.92L22 12l-3.54-3.54-1.76 1.77L18.46 12l-1.76 1.77zM12 5.54l1.77 1.76 1.77-1.76L12 2 8.46 5.54l1.77 1.76z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
