import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChildCareTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M19 10c-.1 0-.19.02-.29.03-.2-.67-.49-1.29-.86-1.86C16.6 6.26 14.45 5 12 5S7.4 6.26 6.15 8.17c-.37.57-.66 1.19-.86 1.86-.1-.01-.19-.03-.29-.03-1.1 0-2 .9-2 2s.9 2 2 2c.1 0 .19-.02.29-.03.2.67.49 1.29.86 1.86C7.4 17.74 9.55 19 12 19s4.6-1.26 5.85-3.17c.37-.57.66-1.19.86-1.86.1.01.19.03.29.03 1.1 0 2-.9 2-2s-.9-2-2-2m-4.5-.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25m-5 0c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M12 17c-2.01 0-3.74-1.23-4.5-3h9c-.76 1.77-2.49 3-4.5 3',
        props,
        attrs
      );
  },
});