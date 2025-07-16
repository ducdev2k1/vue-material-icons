import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WorkHistoryTwoToneIcon',
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
              d: 'M4 8v11h7.08c-.05-.33-.08-.66-.08-1 0-3.87 3.13-7 7-7 .7 0 1.37.1 2 .29V8z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
