import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CallSplitRoundedIcon',
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
              d: 'm14.85 4.85 1.44 1.44-2.88 2.88 1.42 1.42 2.88-2.88 1.44 1.44c.31.31.85.09.85-.36V4.5c0-.28-.22-.5-.5-.5h-4.29c-.45 0-.67.54-.36.85M8.79 4H4.5c-.28 0-.5.22-.5.5v4.29c0 .45.54.67.85.35L6.29 7.7 11 12.4V19c0 .55.45 1 1 1s1-.45 1-1v-7c0-.26-.11-.52-.29-.71l-5-5.01 1.44-1.44c.31-.3.09-.84-.36-.84',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
