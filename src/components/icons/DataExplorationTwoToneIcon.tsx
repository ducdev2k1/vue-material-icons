import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DataExplorationTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 20c-2.89 0-5.43-1.54-6.83-3.84l2.95-2.95L11.41 16 16 11.42V13h2V8h-5v2h1.58l-3.28 3.28L8 10.5l-3.69 3.7C4.11 13.5 4 12.76 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8m7.5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
        props,
        attrs
      );
  },
});