import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AllOutRoundedIcon',
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
              d: 'M4 4.5V8l4-4H4.5c-.28 0-.5.22-.5.5M16 4l4 4V4.5c0-.28-.22-.5-.5-.5zm4 15.5V16l-4 4h3.5c.28 0 .5-.22.5-.5M4.5 20H8l-4-4v3.5c0 .28.22.5.5.5M19 12c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7 7-3.13 7-7m-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
