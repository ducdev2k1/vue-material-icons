import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GroupOffTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M10.99 8.16c.01-.05.01-.1.01-.16 0-1.1-.9-2-2-2-.06 0-.11 0-.16.01zM9 15c-2.7 0-5.8 1.29-6 2.01V18h12v-.17l-2.11-2.11C11.76 15.31 10.33 15 9 15',
        props,
        attrs
      );
  },
});