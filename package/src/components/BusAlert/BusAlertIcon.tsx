import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BusAlertIcon',
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
              d: 'M16 1a7 7 0 0 0-5.78 3.05l.02-.03C9.84 4 9.42 4 9 4c-4.42 0-8 .5-8 4v10c0 .88.39 1.67 1 2.22V22a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.78c.61-.55 1-1.34 1-2.22v-3.08A7 7 0 0 0 16 1M4.5 19a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M3 13V8h6c0 1.96.81 3.73 2.11 5zm10.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m2.5-6a5 5 0 1 1 0-10 5 5 0 0 1 0 10m-1-9h2v5h-2zm0 6h2v2h-2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
