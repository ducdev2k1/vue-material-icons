import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NightsStayOutlinedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M19.78 17.51c-2.47 0-6.57-1.33-8.68-5.43-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.61-.26 1.28-.42 1.98-.42 0-3.09 1.73-5.77 4.3-7.1-.5 2.19-.54 5.04 1.04 8.1 1.57 3.04 4.18 4.95 6.8 5.86-1.23.74-2.65 1.15-4.13 1.15-.5 0-1-.05-1.48-.14-.37.7-.94 1.27-1.64 1.64.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-.17.01-.37.02-.57.02',
        props,
        attrs
      );
  },
});