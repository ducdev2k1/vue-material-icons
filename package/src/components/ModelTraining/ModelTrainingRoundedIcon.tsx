import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModelTrainingRoundedIcon',
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
              d: 'M15.5 13.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5m-2.5 6h-2v.5c0 .55.45 1 1 1s1-.45 1-1zm6-6.5c0 1.39-.41 2.69-1.12 3.78-.25.39-.19.91.14 1.24.44.44 1.2.38 1.54-.15C20.47 16.47 21 14.8 21 13c0-2.36-.91-4.51-2.4-6.12-.39-.42-1.05-.43-1.45-.03-.38.38-.38.99-.02 1.39C18.29 9.49 19 11.16 19 13m-3.35-8.35-2.79-2.79c-.32-.32-.86-.1-.86.35V4c-4.97 0-9 4.03-9 9 0 1.8.53 3.47 1.44 4.88.34.53 1.1.59 1.54.15.33-.33.39-.84.14-1.23-1.39-2.15-1.64-5.1.13-8C7.45 6.85 9.71 5.81 12 6v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
