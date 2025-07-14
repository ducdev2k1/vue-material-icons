import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Man3SharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M16 7H8v8h2v7h4v-7h2zm-4.0001-5.2487L14.2485 4l-2.2486 2.2486L9.7513 4z',
        props,
        attrs
      );
  },
});