import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'QueueTwoToneIcon',
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
              d: 'M8 16h12V4H8zm1-7h4V5h2v4h4v2h-4v4h-2v-4H9z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
