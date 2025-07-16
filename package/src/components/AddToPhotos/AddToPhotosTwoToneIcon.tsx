import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddToPhotosTwoToneIcon',
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
              d: 'M20 4H8v12h12zm-1 7h-4v4h-2v-4H9V9h4V5h2v4h4z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
