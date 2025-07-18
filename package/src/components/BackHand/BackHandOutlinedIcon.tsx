import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BackHandOutlinedIcon',
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
              d: 'M21 7c0-1.38-1.12-2.5-2.5-2.5-.17 0-.34.02-.5.05V4c0-1.38-1.12-2.5-2.5-2.5-.23 0-.46.03-.67.09C14.46.66 13.56 0 12.5 0c-1.23 0-2.25.89-2.46 2.06Q9.785 2 9.5 2C8.12 2 7 3.12 7 4.5v5.89c-.34-.31-.76-.54-1.22-.66l-.77-.21c-.83-.23-1.7.09-2.19.83-.38.57-.4 1.31-.15 1.95l2.56 6.43C6.49 21.91 9.57 24 13 24c4.42 0 8-3.58 8-8zm-2 9c0 3.31-2.69 6-6 6-2.61 0-4.95-1.59-5.91-4.01l-2.6-6.54.53.14c.46.12.83.46 1 .9L7 15h2V4.5c0-.28.22-.5.5-.5s.5.22.5.5V12h2V2.5c0-.28.22-.5.5-.5s.5.22.5.5V12h2V4c0-.28.22-.5.5-.5s.5.22.5.5v8h2V7c0-.28.22-.5.5-.5s.5.22.5.5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
