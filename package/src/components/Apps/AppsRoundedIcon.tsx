import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppsRoundedIcon',
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
              d: 'M6 20q-.825 0-1.4125-.5875T4 18t.5875-1.4125T6 16t1.4125.5875T8 18t-.5875 1.4125T6 20m6 0q-.825 0-1.4125-.5875T10 18t.5875-1.4125T12 16t1.4125.5875T14 18t-.5875 1.4125T12 20m6 0q-.825 0-1.4125-.5875T16 18t.5875-1.4125T18 16t1.4125.5875T20 18t-.5875 1.4125T18 20M6 14q-.825 0-1.4125-.5875T4 12t.5875-1.4125T6 10t1.4125.5875T8 12t-.5875 1.4125T6 14m6 0q-.825 0-1.4125-.5875T10 12t.5875-1.4125T12 10t1.4125.5875T14 12t-.5875 1.4125T12 14m6 0q-.825 0-1.4125-.5875T16 12t.5875-1.4125T18 10t1.4125.5875T20 12t-.5875 1.4125T18 14M6 8q-.825 0-1.4125-.5875T4 6t.5875-1.4125T6 4t1.4125.5875T8 6t-.5875 1.4125T6 8m6 0q-.825 0-1.4125-.5875T10 6t.5875-1.4125T12 4t1.4125.5875T14 6t-.5875 1.4125T12 8m6 0q-.825 0-1.4125-.5875T16 6t.5875-1.4125T18 4t1.4125.5875T20 6t-.5875 1.4125T18 8',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
