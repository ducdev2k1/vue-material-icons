import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ControlCameraSharpIcon',
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
              d: 'M5.54 8.46 2 12l3.54 3.54 1.76-1.77L5.54 12l1.76-1.77zm12.92 0-1.76 1.77L18.46 12l-1.76 1.77 1.76 1.77L22 12zm-6.46 10-1.77-1.76-1.77 1.76L12 22l3.54-3.54-1.77-1.76zM8.46 5.54l1.77 1.76L12 5.54l1.77 1.76 1.77-1.76L12 2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
