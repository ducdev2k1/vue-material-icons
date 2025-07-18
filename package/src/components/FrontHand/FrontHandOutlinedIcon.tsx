import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FrontHandOutlinedIcon',
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
              d: 'M18.5 8c-.17 0-.34.02-.5.05V4.5C18 3.12 16.88 2 15.5 2q-.285 0-.54.06C14.75.89 13.73 0 12.5 0c-1.06 0-1.96.66-2.33 1.59-.21-.06-.44-.09-.67-.09C8.12 1.5 7 2.62 7 4v.55c-.16-.03-.33-.05-.5-.05C5.12 4.5 4 5.62 4 7v8.5c0 4.69 3.81 8.5 8.5 8.5s8.5-3.81 8.5-8.5v-5C21 9.12 19.88 8 18.5 8m.5 7.5c0 3.59-2.91 6.5-6.5 6.5S6 19.09 6 15.5V7c0-.28.22-.5.5-.5s.5.22.5.5v5h2V4c0-.28.22-.5.5-.5s.5.22.5.5v7h2V2.5c0-.28.22-.5.5-.5s.5.22.5.5V11h2V4.5c0-.28.22-.5.5-.5s.5.22.5.5v8.92c-1.77.77-3 2.53-3 4.58h2c0-1.66 1.34-3 3-3v-4.5c0-.28.22-.5.5-.5s.5.22.5.5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
