import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ExtensionOffOutlinedIcon',
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
              d: 'm1.39 4.22 1.62 1.62c0 .05-.01.1-.01.16v3.8c2.7 0 3 2.16 3 2.7s-.29 2.7-3 2.7V19c0 1.1.9 2 2 2h3.8c0-2.71 2.16-3 2.7-3s2.7.29 2.7 3H18c.06 0 .11 0 .16-.01l1.61 1.61 1.41-1.41L2.81 2.81zM11.5 16c-1.5 0-3.57.83-4.37 3H5v-2.13c2.17-.8 3-2.87 3-4.37 0-.69-.18-1.5-.58-2.25l6.33 6.33c-.75-.4-1.56-.58-2.25-.58M8.83 6l-2-2H9c0-1.38 1.12-2.5 2.5-2.5S14 2.62 14 4h4c1.1 0 2 .9 2 2v4c1.38 0 2.5 1.12 2.5 2.5S21.38 15 20 15v2.17l-2-2V13h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-2V6h-6V4c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
