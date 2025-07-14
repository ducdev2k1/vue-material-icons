import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BakeryDiningTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'm7.6 8.67-2.01.8c-.22.09-.34.31-.31.54l2.4 5.98h1.23l-.62-6.9c-.04-.34-.38-.55-.69-.42M3.07 16.1c-.27.53.29 1.09.82.83l1.68-.84-1.08-2.71zm10.29-9.11h-2.71c-.27 0-.53.23-.5.54l.77 8.45h2.17l.77-8.45c.02-.31-.23-.54-.5-.54m5.05 2.48-2.01-.8c-.31-.12-.65.09-.68.42l-.62 6.9h1.23l2.4-5.98c.02-.23-.1-.45-.32-.54m1.11 3.92-1.08 2.7 1.68.84c.52.26 1.09-.3.82-.83z',
        props,
        attrs
      );
  },
});