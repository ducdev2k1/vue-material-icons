import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChecklistRtlSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M11 7H2v2h9zm0 8H2v2h9zm5.34-4L12.8 7.46l1.41-1.41 2.12 2.12 4.24-4.24L22 5.34zm0 8-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L22 13.34z',
        props,
        attrs
      );
  },
});