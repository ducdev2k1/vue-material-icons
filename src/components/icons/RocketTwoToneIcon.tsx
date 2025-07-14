import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RocketTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M7.98 18.25c-.29-.9-.57-1.94-.76-3L6 16.07v2.98zM12 4.36S9 6.38 9 13c0 2.25 1 5 1 5h4s1-2.75 1-5c0-6.62-3-8.64-3-8.64M12 13c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m6 6.05v-2.98l-1.22-.81c-.19 1.05-.47 2.1-.76 3z',
        props,
        attrs
      );
  },
});