import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SavedSearchRoundedIcon',
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
              d: 'M14.73 13.31c1.13-1.55 1.63-3.58.98-5.74-.68-2.23-2.57-3.98-4.85-4.44-4.65-.93-8.66 3.09-7.72 7.73.46 2.29 2.21 4.18 4.44 4.85 2.16.65 4.19.15 5.74-.98l5.56 5.56c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
