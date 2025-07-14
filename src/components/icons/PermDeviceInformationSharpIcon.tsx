import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PermDeviceInformationSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M13 7h-2v2h2zm0 4h-2v6h2zM5 1v22h14V1zm12 18H7V5h10z',
        props,
        attrs
      );
  },
});