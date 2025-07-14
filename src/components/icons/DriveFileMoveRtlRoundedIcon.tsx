import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DriveFileMoveRtlRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-8.85 10.15-2.79-2.79c-.2-.2-.2-.51 0-.71l2.79-2.79c.31-.32.85-.1.85.35V12h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v1.79c0 .45-.54.67-.85.36',
        props,
        attrs
      );
  },
});