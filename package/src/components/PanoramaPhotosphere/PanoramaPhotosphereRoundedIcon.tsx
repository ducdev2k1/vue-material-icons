import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PanoramaPhotosphereRoundedIcon',
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
              d: 'M21.95 8.15c-.29-.16-.61-.31-.93-.46C19.4 4.33 15.98 2 12 2S4.6 4.33 2.99 7.68c-.33.15-.64.3-.93.46C1.41 8.5 1 9.17 1 9.91v4.18c0 .74.41 1.41 1.05 1.77.29.16.61.31.93.46C4.6 19.67 8.02 22 12 22s7.4-2.33 9.01-5.68c.33-.15.64-.3.93-.46.65-.36 1.06-1.03 1.06-1.77V9.91c0-.74-.41-1.41-1.05-1.76M12 4c2.37 0 4.49 1.04 5.95 2.68C16.17 6.25 14.15 6 12 6s-4.17.25-5.95.68C7.51 5.04 9.63 4 12 4m0 16c-2.37 0-4.49-1.04-5.95-2.68 1.78.43 3.8.68 5.95.68s4.17-.25 5.95-.68C16.49 18.96 14.37 20 12 20',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
