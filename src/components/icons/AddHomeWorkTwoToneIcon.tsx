import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddHomeWorkTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 5v1.4l5 3.57v1.11c.33-.05.66-.08 1-.08 1.08 0 2.09.25 3 .68V5zm7 4h-2V7h2z',
        props,
        attrs
      );
  },
});