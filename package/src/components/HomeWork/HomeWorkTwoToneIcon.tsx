import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeWorkTwoToneIcon',
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
              d: 'M17 11h2v2h-2v2h2v2h-2v2h4V5h-9v1.4l5 3.57zm0-4h2v2h-2z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
