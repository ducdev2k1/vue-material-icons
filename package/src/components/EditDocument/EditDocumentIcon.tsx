import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EditDocumentIcon',
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
              d: 'M14 19.88V22h2.12l5.17-5.17-2.12-2.12zM20 8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H12v-2.95l8-8zm-7 1V3.5L18.5 9zm9.71 5-.71-.71a.996.996 0 0 0-1.41 0l-.71.71L22 16.12l.71-.71c.39-.39.39-1.02 0-1.41',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
