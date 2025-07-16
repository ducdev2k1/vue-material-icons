import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DisplaySettingsTwoToneIcon',
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
              d: 'M4 17h16V5H4zm14-3.25h-8v-1.5h8zM15 7h1.5v1.25H18v1.5h-1.5V11H15zM6 8.25h8v1.5H6zm0 4h1.5V11H9v4H7.5v-1.25H6z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
