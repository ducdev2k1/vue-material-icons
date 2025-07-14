import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DesignServicesTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'm15.91 9.28-1.3-1.3L5 17.59V19h1.41l9.61-9.61zm-5.08-.35-1.2-1.2-1.19 1.19L7.02 7.5l1.19-1.18-1.27-1.28-1.9 1.9 3.89 3.89zm5.44 5.45-1.2-1.21-1.9 1.9 3.89 3.89 1.9-1.9-1.27-1.27-1.19 1.19-1.42-1.41zm-.2493-7.822 1.4142-1.4142 1.4142 1.4143-1.4142 1.4142z',
        props,
        attrs
      );
  },
});