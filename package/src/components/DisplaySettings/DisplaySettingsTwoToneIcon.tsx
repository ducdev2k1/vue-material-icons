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
          {
            tag: 'path',
            props: {
              d: 'M20 3H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2m0 14H4V5h16z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M6 8.25h8v1.5H6zm10.5 1.5H18v-1.5h-1.5V7H15v4h1.5zm-6.5 2.5h8v1.5h-8zM7.5 15H9v-4H7.5v1.25H6v1.5h1.5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
