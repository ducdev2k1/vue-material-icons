import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoMealsSharpIcon',
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
              d: 'M16 14V6c0-1.76 2.24-4 5-4v16.17l-2-2V14zm4.49 9.31L10.02 12.85c-.33.09-.66.15-1.02.15v9H7v-9c-2.21 0-4-1.79-4-4V5.83L.69 3.51 2.1 2.1l19.8 19.8zM6.17 9 5 7.83V9zM9 2H7v2.17l2 2zm4 7V2h-2v6.17l1.85 1.85c.09-.33.15-.66.15-1.02',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
