import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RailwayAlertRoundedIcon',
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
              d: 'M4 11V8h7.29c-.77-2.6.21-4.61.37-4.97C2.97 2.67 2 5.02 2 7v9.5C2 18.43 3.57 20 5.5 20l-1.21.81c-.18.12-.29.32-.29.54 0 .36.29.65.65.65h10.7c.36 0 .65-.29.65-.65 0-.22-.11-.42-.29-.54L14.5 20c1.93 0 3.5-1.57 3.5-3.5V13c-1.91 0-3.63-.76-4.89-2zm6 6c-.83 0-1.5-.67-1.5-1.5S9.17 14 10 14s1.5.67 1.5 1.5S10.83 17 10 17',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
