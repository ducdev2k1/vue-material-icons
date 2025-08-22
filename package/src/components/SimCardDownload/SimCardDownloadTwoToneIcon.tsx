import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SimCardDownloadTwoToneIcon',
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
              d: 'M6 8.83V20h12V4h-7.17zm5 .19L13 9v4h3l-4 4-4-4h3z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V8.83L10.83 4H18z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm12 17 4-4h-3V9l-2 .02V13H8z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
