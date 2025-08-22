import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DomainVerificationSharpIcon',
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
              d: 'm16.6 10.88-1.42-1.42-4.24 4.25-2.12-2.13L7.4 13l3.54 3.54z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M3 4v16h18V4zm16 14H5V8h14z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
