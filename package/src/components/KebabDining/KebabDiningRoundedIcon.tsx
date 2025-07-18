import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KebabDiningRoundedIcon',
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
              d: 'M7.75 13v1h.75c1.38 0 2.5 1.12 2.5 2.5S9.88 19 8.5 19h-.75v3.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V19H5.5C4.12 19 3 17.88 3 16.5S4.12 14 5.5 14h.75v-1H4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h2.25V7H5.5C4.12 7 3 5.88 3 4.5S4.12 2 5.5 2h.75v-.25c0-.41.34-.75.75-.75s.75.34.75.75V2h.75C9.88 2 11 3.12 11 4.5S9.88 7 8.5 7h-.75v1H10c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1zm10 0v1h.75c1.38 0 2.5 1.12 2.5 2.5S19.88 19 18.5 19h-.75v3.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V19h-.75c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5h.75v-1H14c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h2.25V7h-.75C14.12 7 13 5.88 13 4.5S14.12 2 15.5 2h.75v-.25c0-.41.34-.75.75-.75s.75.34.75.75V2h.75C19.88 2 21 3.12 21 4.5S19.88 7 18.5 7h-.75v1H20c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
