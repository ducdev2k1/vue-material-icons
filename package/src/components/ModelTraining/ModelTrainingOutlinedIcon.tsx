import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModelTrainingOutlinedIcon',
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
              d: 'M15.5 13.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5m-2.5 6h-2V21h2zm6-6.5c0 1.68-.59 3.21-1.58 4.42l1.42 1.42C20.18 17.27 21 15.23 21 13c0-2.74-1.23-5.19-3.16-6.84l-1.42 1.42C17.99 8.86 19 10.82 19 13m-3-8-4-4v3c-4.97 0-9 4.03-9 9 0 2.23.82 4.27 2.16 5.84l1.42-1.42C5.59 16.21 5 14.68 5 13c0-3.86 3.14-7 7-7v3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
