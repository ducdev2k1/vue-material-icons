import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NestCamWiredStandTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 17c-1.65 0-3 1.35-3 3v1h6v-1c0-1.65-1.35-3-3-3m4-14-4.08.41C9.69 3.64 8 5.5 8 7.75s1.69 4.11 3.92 4.34l4.11.42z',
        props,
        attrs
      );
  },
});