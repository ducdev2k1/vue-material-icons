import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Person3RoundedIcon',
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
              d: 'M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V18c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-.78c0-1.12-.61-2.15-1.61-2.66M10 12h4c1.66 0 3-1.34 3-3 0-.73-.27-1.4-.71-1.92.13-.33.21-.7.21-1.08 0-1.25-.77-2.32-1.86-2.77C14 2.48 13.06 2 12 2s-2 .48-2.64 1.23C8.27 3.68 7.5 4.75 7.5 6c0 .38.08.75.21 1.08C7.27 7.6 7 8.27 7 9c0 1.66 1.34 3 3 3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
