import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UnsubscribeRoundedIcon',
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
              d: 'M18.5 11.5c.92 0 1.75.26 2.49.69V5c0-1.1-.89-2-1.99-2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h8.55c-.02-.17-.05-.33-.05-.5 0-2.76 2.24-5 5-5m-5.61-1.45c-.56.28-1.23.28-1.79 0l-5.61-2.8c-.3-.15-.49-.46-.49-.8 0-.66.7-1.1 1.29-.8L12 8.5l5.71-2.85c.59-.3 1.29.13 1.29.8 0 .34-.19.65-.49.8zM18.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5m2 3.5c0 .28-.22.5-.5.5h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
