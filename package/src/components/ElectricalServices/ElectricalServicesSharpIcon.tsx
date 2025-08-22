import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ElectricalServicesSharpIcon',
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
              d: 'M18 13h3v2h-3zm-6-1v2h-2v4h2v2h5v-8z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M5 11h7V4H4v2h6v3H3v8h6v-2H5zm13 6h3v2h-3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
