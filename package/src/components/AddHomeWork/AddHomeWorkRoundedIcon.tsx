import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddHomeWorkRoundedIcon',
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
              d: 'M14.96 11.7c-.09-.52-.36-.99-.8-1.3l-5-3.57c-.7-.5-1.63-.5-2.32 0l-5 3.57c-.53.38-.84.98-.84 1.63V19c0 1.1.9 2 2 2h3v-6h4v6h1.68c-.43-.91-.68-1.92-.68-3 0-2.78 1.62-5.17 3.96-6.3M23 13.11V4.97C23 3.88 22.12 3 21.03 3h-9.06C10.88 3 10 3.88 10 4.97l.02.05c.1.06.21.11.3.18l5 3.57c.79.56 1.34 1.4 1.56 2.32.37-.05.74-.09 1.12-.09 1.96 0 3.73.81 5 2.11M17 7h2v2h-2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
