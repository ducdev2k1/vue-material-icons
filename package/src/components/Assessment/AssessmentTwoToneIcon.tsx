import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AssessmentTwoToneIcon',
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
              d: 'M5 5v14h14V5zm4 12H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
