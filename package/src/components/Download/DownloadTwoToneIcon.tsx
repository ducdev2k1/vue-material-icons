import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DownloadTwoToneIcon',
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
              d: 'M13 9V5h-2v6H9.83L12 13.17 14.17 11H13z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M15 9V3H9v6H5l7 7 7-7zm-3 4.17L9.83 11H11V5h2v6h1.17zM5 18h14v2H5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
