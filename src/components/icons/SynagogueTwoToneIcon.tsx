import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SynagogueTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M4 6c-.55 0-1 .45-1 1v1h2V7c0-.55-.45-1-1-1m-1 4h2v9H3zm4-.08V19h2v-3c0-1.65 1.35-3 3-3s3 1.35 3 3v3h2V9.92l-5-4.29zm6.5.08c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M20 6c-.55 0-1 .45-1 1v1h2V7c0-.55-.45-1-1-1m-1 4h2v9h-2z',
        props,
        attrs
      );
  },
});