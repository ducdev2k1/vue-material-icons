import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PhonelinkSetupOutlinedIcon',
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
              d: 'M7 3v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2m2.5 12.5c.29-.12.55-.29.8-.48l-.02.03 1.01.39c.23.09.49 0 .61-.22l.84-1.46c.12-.21.07-.49-.12-.64l-.85-.68-.02.03c.02-.16.05-.32.05-.48s-.03-.32-.05-.48l.02.03.85-.68c.19-.15.24-.43.12-.64l-.84-1.46c-.12-.21-.38-.31-.61-.22l-1.01.39.02.03c-.25-.17-.51-.34-.8-.46l-.17-1.08C9.3 7.18 9.09 7 8.84 7H7.16c-.25 0-.46.18-.49.42L6.5 8.5c-.29.12-.55.29-.8.48l.02-.03-1.02-.39c-.23-.09-.49 0-.61.22l-.84 1.46c-.12.21-.07.49.12.64l.85.68.02-.03c-.02.15-.05.31-.05.47s.03.32.05.48l-.02-.03-.85.68c-.19.15-.24.43-.12.64l.84 1.46c.12.21.38.31.61.22l1.01-.39-.01-.04c.25.19.51.36.8.48l.17 1.07c.03.25.24.43.49.43h1.68c.25 0 .46-.18.49-.42zM6 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
