import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EditCalendarSharpIcon',
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
              d: 'M12 22H3V4h3V2h2v2h8V2h2v2h3v8h-2v-2H5v10h7zm10.13-5.01 1.41-1.41-2.12-2.12-1.41 1.41zm-.71.71-5.3 5.3H14v-2.12l5.3-5.3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
