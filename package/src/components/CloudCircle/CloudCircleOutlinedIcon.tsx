import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CloudCircleOutlinedIcon',
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
              d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m4.29-9.81c-.4-2.01-2.16-3.52-4.29-3.52-1.69 0-3.15.96-3.88 2.36C6.36 9.21 5 10.7 5 12.5 5 14.43 6.57 16 8.5 16h7.58c1.61 0 2.92-1.31 2.92-2.92 0-1.54-1.2-2.79-2.71-2.89M16 14H8.5c-.83 0-1.5-.67-1.5-1.5S7.67 11 8.5 11h.9l.49-1.05c.41-.79 1.22-1.28 2.11-1.28 1.13 0 2.11.8 2.33 1.91l.28 1.42H16c.55 0 1 .45 1 1s-.45 1-1 1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
