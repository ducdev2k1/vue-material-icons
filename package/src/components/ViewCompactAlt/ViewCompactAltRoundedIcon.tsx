import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ViewCompactAltRoundedIcon',
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
              d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-9 12.5H8c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5m0-5H8c-.28 0-.5-.22-.5-.5V8c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5m5 5h-3c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5m0-5h-3c-.28 0-.5-.22-.5-.5V8c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
