import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CookieRoundedIcon',
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
              d: 'M21.27 10.9c-1.21-.33-2.31-1.46-2.29-2.89.01-.56-.4-1.02-.96-1.01C15.83 7.03 14 5.22 14 3.02c0-.49-.35-.9-.84-.96C6.53 1.22 2 6.81 2 12c0 5.52 4.48 10 10 10 5.61 0 10.11-4.62 10-10.18-.01-.44-.31-.81-.73-.92M8.5 15c-.83 0-1.5-.67-1.5-1.5S7.67 12 8.5 12s1.5.67 1.5 1.5S9.33 15 8.5 15m2-5C9.67 10 9 9.33 9 8.5S9.67 7 10.5 7s1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
