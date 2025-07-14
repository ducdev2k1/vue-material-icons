import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PersonalInjuryTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m-1.06 16H9.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.89zM18 20h-4.85l2.94-6.27c.54.2 1.01.41 1.4.61.31.16.51.5.51.88zm-8.25 2C8.23 22 7 20.77 7 19.25s1.23-2.75 2.75-2.75h2.83l1.55-3.3c-.66-.13-1.37-.2-2.13-.2-2.37 0-4.29.73-5.48 1.34-.32.16-.52.5-.52.88V22z',
        props,
        attrs
      );
  },
});