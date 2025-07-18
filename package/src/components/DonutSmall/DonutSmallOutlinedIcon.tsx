import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DonutSmallOutlinedIcon',
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
              d: 'M14.82 11h7.13c-.47-4.72-4.23-8.48-8.95-8.95v7.13c.85.31 1.51.97 1.82 1.82M15 4.58C17 5.4 18.6 7 19.42 9h-3.43c-.28-.37-.62-.71-.99-.99zM2 12c0 5.19 3.95 9.45 9 9.95v-7.13C9.84 14.4 9 13.3 9 12s.84-2.4 2-2.82V2.05c-5.05.5-9 4.76-9 9.95m7-7.42v3.44c-1.23.92-2 2.39-2 3.98s.77 3.06 2 3.99v3.44C6.04 18.24 4 15.35 4 12s2.04-6.24 5-7.42m4 10.24v7.13c4.72-.47 8.48-4.23 8.95-8.95h-7.13c-.31.85-.97 1.51-1.82 1.82m2 1.17c.37-.28.71-.61.99-.99h3.43C18.6 17 17 18.6 15 19.42z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
