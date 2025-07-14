import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WindPowerTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M3.28 13c-.15 0-.28.13-.28.28 0 .12.08.24.2.27l4.51 1.29 2.33-1.4c-.02-.15-.03-.29-.03-.44zm14.48-9.46c-.15-.09-.29-.01-.34.04L14 6.78v3.36l.11.03 3.74-6.24c.09-.14.04-.31-.09-.39m.43 11.94-2.78-.69c-.07.1-.15.19-.24.28l4.85 4.85c.16.16.35.05.4 0 .09-.09.11-.23.05-.33z',
        props,
        attrs
      );
  },
});