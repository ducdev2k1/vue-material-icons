import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VolunteerActivismTwoToneIcon',
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
              d: 'M3 13h2v7H3zm13-2.71c1.96-1.82 4-3.88 4-4.99 0-.74-.56-1.3-1.3-1.3-.44 0-.89.21-1.18.55L16 6.34l-1.52-1.79c-.29-.34-.74-.55-1.18-.55-.74 0-1.3.56-1.3 1.3 0 1.11 2.04 3.17 4 4.99M19 18h-5.35c-.54 0-1.07-.09-1.58-.26l-2.38-.79.63-1.9 2.38.79c.31.1.63.15.95.15H15c0-.37-.23-.7-.57-.83L8.61 13H7v5.48l6.97 1.94 5.93-1.85c-.16-.34-.51-.57-.9-.57',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
