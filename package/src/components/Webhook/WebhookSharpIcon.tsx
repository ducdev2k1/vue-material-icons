import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WebhookSharpIcon',
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
              d: 'M10 15h5.88c.27-.31.67-.5 1.12-.5.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.44 0-.84-.19-1.12-.5H11.9c-.46 2.28-2.48 4-4.9 4-2.76 0-5-2.24-5-5 0-2.42 1.72-4.44 4-4.9v2.07c-1.16.41-2 1.53-2 2.83 0 1.65 1.35 3 3 3s3-1.35 3-3zm2.5-11c1.65 0 3 1.35 3 3h2c0-2.76-2.24-5-5-5s-5 2.24-5 5c0 1.43.6 2.71 1.55 3.62l-2.35 3.9c-.68.14-1.2.75-1.2 1.48 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.16-.02-.31-.07-.45l3.38-5.63C10.49 9.61 9.5 8.42 9.5 7c0-1.65 1.35-3 3-3m4.5 9c-.64 0-1.23.2-1.72.54l-3.05-5.07C11.53 8.35 11 7.74 11 7c0-.83.67-1.5 1.5-1.5S14 6.17 14 7c0 .15-.02.29-.06.43l2.19 3.65c.28-.05.57-.08.87-.08 2.76 0 5 2.24 5 5s-2.24 5-5 5c-1.85 0-3.47-1.01-4.33-2.5h2.67c.48.32 1.05.5 1.66.5 1.65 0 3-1.35 3-3s-1.35-3-3-3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
