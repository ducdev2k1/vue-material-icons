import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BluetoothDriveRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'm19.85 6 1.8-1.8c.2-.2.2-.51 0-.71L19.5 1.36c-.32-.31-.85-.09-.85.35v3.08L16.7 2.85c-.19-.19-.51-.19-.7 0s-.19.51 0 .7L18.44 6 16 8.44c-.19.19-.19.5 0 .7s.51.2.7 0l1.95-1.95v3.09c0 .45.54.67.85.35l2.14-2.15c.2-.2.19-.51 0-.71zm-.2-3.09.94.94-.94.94zm0 6.17V7.2l.94.94z',
        props,
        attrs
      );
  },
});