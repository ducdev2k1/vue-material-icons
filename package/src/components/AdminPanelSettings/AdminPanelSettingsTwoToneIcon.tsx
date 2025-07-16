import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AdminPanelSettingsTwoToneIcon',
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
              d: 'm16 7.58-5.5-2.4L5 7.58v3.6c0 3.5 2.33 6.74 5.5 7.74.25-.08.49-.2.73-.3-.15-.51-.23-1.06-.23-1.62 0-2.97 2.16-5.43 5-5.91z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
