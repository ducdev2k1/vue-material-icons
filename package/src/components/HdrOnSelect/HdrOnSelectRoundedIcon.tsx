import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HdrOnSelectRoundedIcon',
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
              d: 'M18 18.5v-1c0-.83-.67-1.5-1.5-1.5H14c-.55 0-1 .45-1 1v4.31c0 .38.31.69.69.69h.11c.38 0 .69-.31.69-.69V20h1.1l.72 1.59c.11.25.36.41.63.41.5 0 .83-.51.64-.97l-.48-1.13c.5-.3.9-.8.9-1.4m-1.5 0h-2v-1h2zm-13-.5h-2v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V19.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-4.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75zm6.5-2H7.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1H10c.82 0 1.5-.67 1.5-1.5v-3c0-.83-.68-1.5-1.5-1.5m0 4.5H8v-3h2zm13.25-.5H22v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V20h-1.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25v-1.25c0-.41.34-.75.75-.75s.75.34.75.75v1.25h1.25c.41 0 .75.34.75.75s-.34.75-.75.75M12 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4m0-2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
