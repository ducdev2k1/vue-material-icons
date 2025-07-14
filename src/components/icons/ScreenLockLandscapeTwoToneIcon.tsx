import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ScreenLockLandscapeTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M13.2 10c0-.66-.54-1.2-1.2-1.2s-1.2.54-1.2 1.2v1h2.4zM5 17h14V7H5zm4-5c0-.55.45-1 1-1v-1c0-1.1.89-2 2-2 1.1 0 2 .89 2 2v1c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1z',
        props,
        attrs
      );
  },
});