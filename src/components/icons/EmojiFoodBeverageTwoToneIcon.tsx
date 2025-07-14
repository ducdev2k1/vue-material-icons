import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EmojiFoodBeverageTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm10 6.4 1.81 1.45c.12.09.19.24.19.39v4.26c0 .28-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5V8.24c0-.15.07-.3.19-.39L9 6.4V5H6v8c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5h-6z',
        props,
        attrs
      );
  },
});