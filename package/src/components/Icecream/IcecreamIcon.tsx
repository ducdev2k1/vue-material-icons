import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IcecreamIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        [
          {
            tag: 'path',
            props: {
              fillRule: 'evenodd',
              d: 'm8.79 12.4 3.26 6.22 3.17-6.21c-.11-.08-.21-.16-.3-.25-.84.53-1.85.84-2.92.84s-2.08-.31-2.92-.84c-.09.09-.19.17-.29.24m-1.96.59C5.25 12.9 4 11.6 4 10c0-1.49 1.09-2.73 2.52-2.96C6.75 4.22 9.12 2 12 2s5.25 2.22 5.48 5.04C18.91 7.27 20 8.51 20 10c0 1.59-1.24 2.9-2.81 2.99L12.07 23z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
