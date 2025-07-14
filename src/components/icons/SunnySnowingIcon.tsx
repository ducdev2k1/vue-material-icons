import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SunnySnowingIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M13 5h-2V1h2zM1 11h4v2H1zm18 2v-2h4v2zm-1.34-5.24-1.41-1.41 2.83-2.83 1.41 1.41zM3.51 4.93l1.41-1.41 2.83 2.83-1.41 1.41zM4.75 17a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m12 0a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m-9 4a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m3-4a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m3 4a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0M17 13v-1c0-2.76-2.24-5-5-5s-5 2.24-5 5v1z',
        props,
        attrs
      );
  },
});