import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MoveUpRoundedIcon',
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
              d: 'M3.01 13.28c-.14-2.57 1.66-4.73 4.07-5.18l-.79.78c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l2.59-2.59c.39-.39.39-1.02 0-1.41L7.71 3.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l.88.88v.06C3.54 6.48.75 9.7 1.03 13.52 1.29 17.22 4.55 20 8.26 20H10c.55 0 1-.45 1-1s-.45-1-1-1H8.22c-2.7 0-5.07-2.04-5.21-4.72M13 15v3c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2m7 3h-5v-3h5zm0-14h-5c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
