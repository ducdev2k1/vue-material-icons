import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SquareFootRoundedIcon',
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
              d: 'm17.66 17.66-.71.71c-.2.2-.51.2-.71 0s-.2-.51 0-.71l.71-.71-1.94-1.94-.71.71c-.2.2-.51.2-.71 0s-.2-.51 0-.71l.71-.71-1.94-1.94-.71.71c-.2.2-.51.2-.71 0s-.2-.51 0-.71l.71-.71L9.7 9.7l-.71.71c-.2.2-.51.2-.71 0s-.2-.51 0-.71l.71-.71-1.94-1.94-.71.71c-.2.2-.51.2-.71 0s-.2-.51 0-.71l.71-.71-1.49-1.49c-.31-.31-.85-.09-.85.36V18c0 1.1.9 2 2 2h12.79c.45 0 .67-.54.35-.85zM7 16v-4.76L12.76 17H8c-.55 0-1-.45-1-1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
