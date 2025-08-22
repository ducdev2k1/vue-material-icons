import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlumbingTwoToneIcon',
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
              d: 'm19.28 4.93-2.12-2.12c-.78-.78-2.05-.78-2.83 0L11.5 5.64l2.12 2.12 2.12-2.12 3.54 3.54c1.17-1.18 1.17-3.08 0-4.25M5.49 13.77c.59.59 1.54.59 2.12 0l2.47-2.47-2.12-2.13-2.47 2.47c-.59.59-.59 1.54 0 2.13',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm15.04 7.76-.71.71-.71.71L10.44 6c-.59-.6-1.54-.6-2.12-.01-.59.59-.59 1.54 0 2.12l3.18 3.18-.71.71-6.36 6.36c-.78.78-.78 2.05 0 2.83s2.05.78 2.83 0L16.45 12c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
