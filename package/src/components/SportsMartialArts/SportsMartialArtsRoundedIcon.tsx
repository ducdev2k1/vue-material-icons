import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SportsMartialArtsRoundedIcon',
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
              d: 'M19.06 2.6 11.6 8.7l-1.21-1.04 2.48-1.43c.57-.33.67-1.11.21-1.57l-2.95-2.95a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l2.03 2.03-5.4 3.11c-.23.13-.39.35-.46.6l-.96 3.49c-.07.26-.04.53.1.77l1.74 3.02c.28.48.89.64 1.37.37.48-.28.64-.89.37-1.37l-1.53-2.66.36-1.29L9.5 13l.44 8c.03.56.49 1 1.05 1s1.02-.44 1.05-1l.45-9 7.87-7.96c.36-.36.38-.93.05-1.32-.34-.4-.94-.45-1.35-.12',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
