import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Person3TwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M10 10h4c.8 0 1.34-.94.76-1.63-.87-1.04-.26-2-.26-2.37 0-.41-.24-.77-.62-.92-.29-.12-.55-.31-.75-.54C12.96 4.33 12.58 4 12 4s-.96.33-1.13.53c-.2.24-.46.42-.75.54-.38.16-.62.52-.62.93 0 .37.61 1.33-.26 2.37C8.66 9.06 9.2 10 10 10m7.48 6.34C16.29 15.73 14.37 15 12 15s-4.29.73-5.48 1.34c-.32.16-.52.5-.52.88V18h12v-.78c0-.38-.2-.72-.52-.88',
        props,
        attrs
      );
  },
});