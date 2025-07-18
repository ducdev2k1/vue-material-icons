import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BackHandRoundedIcon',
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
              d: 'M21 16c0 4.42-3.58 8-8 8-3.26 0-6.19-1.99-7.4-5.02l-3.03-7.61c-.31-.79.43-1.58 1.24-1.32l.79.26c.56.18 1.02.61 1.24 1.16l1.28 3.21c.08.2.26.32.46.32H8V3.25C8 2.56 8.56 2 9.25 2s1.25.56 1.25 1.25v8.25c0 .28.22.5.5.5s.5-.22.5-.5V1.25c0-.69.56-1.25 1.25-1.25S14 .56 14 1.25V11.5c0 .28.22.5.5.5s.5-.22.5-.5V2.75c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v8.75c0 .28.22.5.5.5s.5-.22.5-.5V5.75c0-.69.56-1.25 1.25-1.25S21 5.06 21 5.75z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
