import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlenderSharpIcon',
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
              d: 'M18 3h-4V2h-4v1H3v8h4.23l.64 4.13L6 17v5h12v-5l-1.87-1.87zM5 9V5h1.31l.62 4zm7 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m2.29-5H9.72L8.33 5h7.34z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
