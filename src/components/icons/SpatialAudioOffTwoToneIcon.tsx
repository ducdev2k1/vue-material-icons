import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SpatialAudioOffTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M15.48 17.34C14.29 16.73 12.37 16 10 16s-4.29.73-5.48 1.34c-.32.16-.52.5-.52.88V19h12v-.78c0-.38-.2-.72-.52-.88',
        props,
        attrs
      );
  },
});