import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PhoneMissedRoundedIcon',
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
              d: 'M23.09 16.2c-6.33-5.59-15.86-5.59-22.18 0-.84.74-.84 2.05-.05 2.84l1.2 1.2c.71.71 1.84.77 2.62.15l1.97-1.57c.47-.37.75-.94.75-1.55V14.7c2.98-.97 6.21-.98 9.2 0v2.58c0 .6.28 1.17.75 1.55l1.96 1.56c.79.62 1.91.56 2.62-.15l1.2-1.2c.8-.79.79-2.1-.04-2.84M6 9c.55 0 1-.45 1-1V6.43l4.24 4.24c.39.39 1.02.39 1.41 0l5.66-5.66c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0l-4.95 4.95L8.4 5H10c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
