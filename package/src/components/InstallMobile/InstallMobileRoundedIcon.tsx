import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InstallMobileRoundedIcon',
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
              d: 'M18.71 13.29 22.3 9.7c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0L19 10.17V4c0-.55-.45-1-1-1s-1 .45-1 1v6.17l-1.89-1.88a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l3.59 3.59c.4.39 1.03.39 1.42 0',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
