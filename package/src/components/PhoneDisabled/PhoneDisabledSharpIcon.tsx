import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PhoneDisabledSharpIcon',
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
              d: 'M14.52 17.35C11.39 19.83 7.36 21.22 3 20.97v-5.51l5.27-.61 2.52 2.52c.81-.41 1.58-.9 2.3-1.45L1.39 4.22l1.42-1.41L21.19 21.2l-1.41 1.41zm1.39-4.24c.56-.73 1.05-1.51 1.47-2.33l-2.53-2.53.61-5.25h5.51c.25 4.37-1.15 8.4-3.63 11.54z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
