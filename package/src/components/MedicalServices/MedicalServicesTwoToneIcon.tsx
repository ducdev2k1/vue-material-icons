import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MedicalServicesTwoToneIcon',
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
              d: 'M4 20h16V8H4zm4-7h3v-3h2v3h3v2h-3v3h-2v-3H8z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
