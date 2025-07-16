import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ExtensionOffTwoToneIcon',
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
              d: 'M18 13v2.17L8.83 6H11V4c0-.28.22-.5.5-.5s.5.22.5.5v2h6v6h2c.28 0 .5.22.5.5s-.22.5-.5.5zm-10-.5c0 1.5-.83 3.57-3 4.37V19h2.13c.8-2.17 2.87-3 4.37-3 .69 0 1.5.18 2.25.58l-6.33-6.33c.4.75.58 1.56.58 2.25',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
