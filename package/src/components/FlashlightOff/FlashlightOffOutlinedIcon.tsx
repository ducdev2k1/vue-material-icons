import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FlashlightOffOutlinedIcon',
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
              d: 'M2.81 2.81 1.39 4.22 8 10.83V22h8v-3.17l3.78 3.78 1.41-1.41zM14 20h-4v-7.17l4 4zm2-16v1H7.83l2 2H16v.39l-2 3.01v.77l2 2V11l2-3V2H6v1.17l.83.83z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
