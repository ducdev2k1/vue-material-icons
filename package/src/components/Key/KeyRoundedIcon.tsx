import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KeyRoundedIcon',
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
              d: 'M20.59 10h-7.94c-.95-2.69-3.76-4.5-6.88-3.88-2.29.46-4.15 2.3-4.63 4.58C.32 14.58 3.26 18 7 18c2.61 0 4.83-1.67 5.65-4H13l1.29 1.29c.39.39 1.02.39 1.41 0L17 14l1.29 1.29c.39.39 1.03.39 1.42 0l2.59-2.61c.39-.39.39-1.03-.01-1.42l-.99-.97c-.2-.19-.45-.29-.71-.29M7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
