import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Rotate90DegreesCwRoundedIcon',
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
              d: 'M3.86 18.46c2.65 3.45 7.11 4.37 10.74 2.79.61-.27.74-1.09.27-1.56l-.05-.05c-.29-.29-.72-.35-1.1-.19-2.96 1.24-6.59.37-8.58-2.62-1.58-2.37-1.55-5.37.05-7.73C6.6 7.03 8.8 6.03 11 6.03v1.76c0 .45.54.67.86.36l2.79-2.79c.2-.2.2-.51 0-.71l-2.8-2.79c-.31-.32-.85-.1-.85.35v1.8c-2.76 0-5.52 1.25-7.34 3.78-2.28 3.17-2.2 7.58.2 10.67',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
