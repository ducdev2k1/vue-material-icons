import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LightbulbCircleSharpIcon',
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
              d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 17c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5m3-2.5H9V15h6zm-.03-2.5H9.03C7.8 13.09 7 11.64 7 10c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.64-.8 3.09-2.03 4',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
