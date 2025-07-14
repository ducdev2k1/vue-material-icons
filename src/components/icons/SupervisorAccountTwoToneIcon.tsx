import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SupervisorAccountTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M4.77 17h4.28c.01-.06.12-.58.29-.99-.11 0-.23-.01-.34-.01-1.53 0-3.25.5-4.23 1',
        props,
        attrs
      );
  },
});