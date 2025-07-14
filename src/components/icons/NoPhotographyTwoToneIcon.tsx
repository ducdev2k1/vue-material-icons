import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoPhotographyTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M10.94 8.12 8.9 6.07 9.88 5h4.24l1.83 2H20v10.17l-3.12-3.12Q17 13.54 17 13c0-2.76-2.24-5-5-5-.36 0-.71.04-1.06.12M12 18c-2.76 0-5-2.24-5-5 0-.91.25-1.76.68-2.49L4.17 7H4v12h12.17l-1.68-1.68c-.73.43-1.58.68-2.49.68',
        props,
        attrs
      );
  },
});