import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KeyboardAltRoundedIcon',
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
              d: 'M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M7 12v2H5v-2zm-2-2V8h2v2zm6 2v2H9v-2zm-2-2V8h2v2zm7 6.5c0 .28-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7c.28 0 .5.22.5.5M15 12v2h-2v-2zm-2-2V8h2v2zm4 4v-2h2v2zm2-4h-2V8h2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
