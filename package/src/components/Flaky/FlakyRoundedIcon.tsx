import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FlakyRoundedIcon',
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
              d: 'M12.16 15.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l.82.82L16 13.52c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.65 2.65c-.19.19-.51.2-.7 0zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2M7.87 6.81l.88.88.88-.88c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.88.88.88.88c.29.29.29.77 0 1.06s-.77.29-1.06 0l-.88-.88-.88.88c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l.88-.88-.88-.88c-.29-.29-.29-.77 0-1.06.29-.3.76-.3 1.06 0M12 20c-2.2 0-4.2-.9-5.7-2.3L17.7 6.3C19.1 7.8 20 9.8 20 12c0 4.4-3.6 8-8 8',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
