import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BedroomChildRoundedIcon',
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
              d: 'M9 8.5h6v2H9zm6.64 3.5H8.37c-.48 0-.87.39-.87.87h.01V14h9v-1.13c0-.48-.39-.87-.87-.87',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
