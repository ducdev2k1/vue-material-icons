import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AnnouncementTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M4 4v13.17l.59-.59.58-.58H20V4zm9 11h-2v-2h2zm0-4h-2V5h2z',
        props,
        attrs
      );
  },
});