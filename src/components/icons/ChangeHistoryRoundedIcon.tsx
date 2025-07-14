import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChangeHistoryRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 7.77 18.39 18H5.61zm-.85-2.41-8.2 13.11c-.41.67.07 1.53.85 1.53h16.4c.79 0 1.26-.86.85-1.53l-8.2-13.11c-.39-.63-1.31-.63-1.7 0',
        props,
        attrs
      );
  },
});