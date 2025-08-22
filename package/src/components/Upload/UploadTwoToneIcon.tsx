import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UploadTwoToneIcon',
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
              d: 'M9.83 8H11v6h2V8h1.17L12 5.83z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm12 3-7 7h4v6h6v-6h4zm1 5v6h-2V8H9.83L12 5.83 14.17 8zM5 18h14v2H5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
