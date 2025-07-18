import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RemoveDoneTwoToneIcon',
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
              d: 'M4.84 1.98 3.43 3.39l10.38 10.38-1.41 1.41-4.24-4.24-1.41 1.41 5.66 5.66 2.83-2.83 6.6 6.6 1.41-1.41zm13.21 10.38L23 7.4 21.57 6l-4.94 4.94zm-.71-4.96-1.41-1.41-2.12 2.12 1.41 1.41zM1.08 12.35l5.66 5.66 1.41-1.41-5.66-5.66z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
