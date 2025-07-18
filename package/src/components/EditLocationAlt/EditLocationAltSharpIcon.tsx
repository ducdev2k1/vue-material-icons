import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EditLocationAltSharpIcon',
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
              d: 'M13.95 13H9V8.05l5.61-5.61C13.78 2.16 12.9 2 12 2c-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8 0-1.01-.16-1.94-.45-2.8zM11 11h2.12l6.16-6.16-2.12-2.12L11 8.88zM19.29.59l-1.42 1.42 2.12 2.12 1.42-1.42z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
