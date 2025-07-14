import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MacroOffIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M19.98 17.15C20.63 15.91 21 14.5 21 13c-1.5 0-2.91.37-4.15 1.02zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9m9-7.5c1.38 0 2.5 1.12 2.5 2.5 0 .99-.58 1.84-1.42 2.25l2.48 2.48c.11.02.23.03.35.03 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.01-.2C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-.57 0-1.09.2-1.51.52l3.16 3.16c.41-.85 1.26-1.43 2.25-1.43',
        props,
        attrs
      );
  },
});