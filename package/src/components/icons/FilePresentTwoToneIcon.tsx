import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FilePresentTwoToneIcon',
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
              d: 'M14 4H6v16h12V8h-4zm2 7v4c0 2.21-1.79 4-4 4s-4-1.79-4-4V9.5C8 8.12 9.12 7 10.5 7S13 8.12 13 9.5V15h-2V9.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V15c0 1.1.9 2 2 2s2-.9 2-2v-4z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
