import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SpeakerGroupOutlinedIcon',
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
              d: 'M18.2 1H9.8C8.81 1 8 1.81 8 2.8v14.4c0 .99.81 1.79 1.8 1.79l8.4.01c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8M18 17l-8-.01V3h8zm-4-9c1.1 0 2-.89 2-2s-.9-2-2-2-2 .89-2 2 .9 2 2 2m0 8c1.93 0 3.5-1.57 3.5-3.5S15.93 9 14 9s-3.5 1.57-3.5 3.5S12.07 16 14 16m0-5c.83 0 1.5.67 1.5 1.5S14.83 14 14 14s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M6 5H4v16c0 1.1.89 2 2 2h10v-2H6z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
