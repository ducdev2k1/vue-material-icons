import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextFieldsIcon',
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
              d: 'M2.5 4v3h5v12h3V7h5V4zm19 5h-9v3h3v7h3v-7h3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
