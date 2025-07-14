import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CelebrationSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'm2 22 14-5-9-9zm12.53-9.47L21 6.05l1.48 1.48 1.06-1.06L21 3.93l-7.53 7.53zM10.94 6 9.47 7.47l1.06 1.06 2.54-2.54-2.54-2.53-1.06 1.07zm8.03 3.97-3.5 3.5 1.06 1.06L19 12.06l2.5 2.49 1.06-1.06z',
        props,
        attrs
      );
  },
});