import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BrowserNotSupportedRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M19 6v10.5l1.95 1.95c.03-.15.05-.3.05-.45V6c0-1.1-.9-2-2-2H6.5l2 2zM3.86 3.95c-.35-.35-.92-.35-1.27 0s-.35.92 0 1.27l.41.42V18c0 1.1.9 2 2 2h12.36l1.42 1.42c.35.35.92.35 1.27 0s.35-.92 0-1.27zM5 18V7.64L15.36 18z',
        props,
        attrs
      );
  },
});