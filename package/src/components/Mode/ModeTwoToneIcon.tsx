import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModeTwoToneIcon',
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
              d: 'M14.06 9.02 5 18.08V19h.92l9.06-9.06z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M18.37 3.29c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41zm-.56 6.65-3.75-3.75L3 17.25V21h3.75zM5 19v-.92l9.06-9.06.92.92L5.92 19z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
