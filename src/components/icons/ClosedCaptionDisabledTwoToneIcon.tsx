import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ClosedCaptionDisabledTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M8.83 6H19v10.17l-1.4-1.4c.24-.18.4-.45.4-.77v-1h-1.5v.5h-.17l-1.83-1.83V10.5h2v.5H18v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v.17zM7.5 13.5h2V13h.67l-2.5-2.5H7.5zm3.5.5c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.32.16-.59.4-.78L5 7.83V18h10.17L11 13.83z',
        props,
        attrs
      );
  },
});