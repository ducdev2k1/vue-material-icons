import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MarkEmailReadRoundedIcon',
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
              d: 'M18.05 21.29c-.39.39-1.02.39-1.41 0l-2.12-2.12a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l1.41 1.41 3.54-3.54c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41zM12.08 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v6.68c-.91-.43-1.92-.68-3-.68-3.87 0-7 3.13-7 7 0 .34.03.67.08 1m-.61-7.33c.32.2.74.2 1.06 0l7.07-4.42c.25-.16.4-.43.4-.72 0-.67-.73-1.07-1.3-.72L12 11 5.3 6.81c-.57-.35-1.3.05-1.3.72 0 .29.15.56.4.72z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
