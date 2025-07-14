import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SettingsBluetoothRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M13.41 10 17 6.42c.39-.39.39-1.02 0-1.42L12.21.21c-.14-.14-.32-.21-.5-.21-.39 0-.71.32-.71.71v6.88L7.11 3.71a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 10 5.7 14.89c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L11 12.41v6.88c0 .39.32.71.71.71.19 0 .37-.07.5-.21L17 15c.39-.39.39-1.02 0-1.42zM13 3.83l1.88 1.88L13 7.59zm0 12.34v-3.76l1.88 1.88z',
        props,
        attrs
      );
  },
});