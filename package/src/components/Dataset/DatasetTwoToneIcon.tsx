import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DatasetTwoToneIcon',
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
              d: 'M5 19h14V5H5zm8-12h4v4h-4zm0 6h4v4h-4zM7 7h4v4H7zm0 6h4v4H7z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M7 13h4v4H7zm6 0h4v4h-4z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M7 7h4v4H7zm6 0h4v4h-4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
