import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ReportProblemTwoToneIcon',
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
              d: 'M12 5.99 4.47 19h15.06zM13 18h-2v-2h2zm-2-4v-4h2v4z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
