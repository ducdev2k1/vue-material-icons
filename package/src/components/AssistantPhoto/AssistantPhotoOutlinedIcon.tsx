import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AssistantPhotoOutlinedIcon',
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
              d: 'm12.36 6 .08.39.32 1.61H18v6h-3.36l-.08-.39-.32-1.61H7V6zM14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
