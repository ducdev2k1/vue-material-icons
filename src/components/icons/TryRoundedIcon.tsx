import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TryRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M20 2H4c-1.1 0-2 .9-2 2v15.59c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-6.43 9.57-1.12 2.44c-.18.39-.73.39-.91 0l-1.12-2.44-2.44-1.12c-.39-.18-.39-.73 0-.91l2.44-1.12 1.12-2.44c.18-.39.73-.39.91 0l1.12 2.44 2.44 1.12c.39.18.39.73 0 .91z',
        props,
        attrs
      );
  },
});