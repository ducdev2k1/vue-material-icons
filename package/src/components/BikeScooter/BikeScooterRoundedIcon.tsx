import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BikeScooterRoundedIcon',
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
              d: 'M10 14h.74L8.82 5.56C8.61 4.65 7.8 4 6.87 4H4c-.55 0-1 .45-1 1s.45 1 1 1h2.87l1.42 6.25h-.01c-2.16.65-3.81 2.48-4.19 4.75H0v2h6v-1c0-2.21 1.79-4 4-4m8.75-6h-.56l-1.35-3.69C16.55 3.52 15.8 3 14.96 3H12c-.55 0-1 .45-1 1s.45 1 1 1h2.96l1.1 3H10.4l.46 2H15c-.43.58-.75 1.25-.9 2h-2.79l.46 2h2.33c.44 2.23 2.31 3.88 4.65 3.99 3.16.15 5.88-2.83 5.12-6.1C23.34 9.57 21.13 8 18.75 8m.13 8c-1.54-.06-2.84-1.37-2.88-2.92-.02-.96.39-1.8 1.05-2.36l.62 1.7c.19.52.76.79 1.28.6s.79-.76.6-1.28l-.63-1.73.01-.01c1.71-.04 3.07 1.29 3.07 3 0 1.72-1.38 3.06-3.12 3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
