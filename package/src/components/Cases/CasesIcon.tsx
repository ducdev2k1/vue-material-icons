import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CasesIcon',
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
              d: 'M3 22q-.825 0-1.4125-.5875T1 20V9h2v11h17v2zm4-4q-.825 0-1.4125-.5875T5 16V5h5V3q0-.825.5875-1.4125T12 1h4q.825 0 1.4125.5875T18 3v2h5v11q0 .825-.5875 1.4125T21 18zm5-13h4V3h-4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
