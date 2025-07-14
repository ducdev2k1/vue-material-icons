import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SettingsRemoteTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M10 21h4V11h-4zm2-9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
        props,
        attrs
      );
  },
});