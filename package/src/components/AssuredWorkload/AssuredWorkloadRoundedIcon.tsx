import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AssuredWorkloadRoundedIcon',
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
              d: 'M6 17c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1m6 0c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1m9.32-11.34L12.9 1.45c-.56-.28-1.23-.28-1.79 0L2.68 5.66c-.42.21-.68.64-.68 1.1C2 7.45 2.55 8 3.24 8h17.53C21.45 8 22 7.45 22 6.76c0-.46-.26-.89-.68-1.1M2 20c0 .55.45 1 1 1h11.4c-.21-.64-.32-1.31-.36-2H3c-.55 0-1 .45-1 1m17-7.74V11c0-.55-.45-1-1-1s-1 .45-1 1v2.26zm.55 1.96-3 1.5c-.34.17-.55.52-.55.9v1.93c0 2.52 1.71 4.88 4 5.45 2.29-.57 4-2.93 4-5.45v-1.93c0-.38-.21-.73-.55-.89l-3-1.5c-.28-.15-.62-.15-.9-.01m-.97 6.08-.8-.8c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l.44.44 1.88-1.85c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.23 2.21c-.39.39-1.02.39-1.41 0',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
