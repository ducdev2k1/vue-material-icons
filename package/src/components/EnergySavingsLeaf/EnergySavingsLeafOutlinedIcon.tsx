import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EnergySavingsLeafOutlinedIcon',
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
              d: 'M12 3c-4.8 0-9 3.86-9 9 0 2.12.74 4.07 1.97 5.61L3 19.59 4.41 21l1.97-1.97C7.93 20.26 9.88 21 12 21c2.3 0 4.61-.88 6.36-2.64C20.12 16.61 21 14.3 21 12V3zm7 9c0 1.87-.73 3.63-2.05 4.95S13.87 19 12 19c-3.86 0-7-3.14-7-7 0-1.9.74-3.68 2.1-4.99C8.42 5.71 10.16 5 12 5h7z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
