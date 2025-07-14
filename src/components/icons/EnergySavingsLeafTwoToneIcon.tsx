import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EnergySavingsLeafTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M7.1 7.01C5.74 8.32 5 10.1 5 12c0 3.86 3.14 7 7 7 1.87 0 3.63-.73 4.95-2.05S19 13.87 19 12V5h-7c-1.84 0-3.58.71-4.9 2.01m6.78.11c.14.14.16.36.04.52l-2.44 3.33 4.05.4c.44.04.63.59.3.89l-5.16 4.63c-.16.15-.41.14-.56-.01-.14-.14-.16-.36-.04-.52l2.44-3.33-4.05-.4c-.44-.04-.63-.59-.3-.89l5.16-4.63c.16-.15.41-.14.56.01',
        props,
        attrs
      );
  },
});