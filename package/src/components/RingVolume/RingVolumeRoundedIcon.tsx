import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RingVolumeRoundedIcon',
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
              d: 'M11.98 7h.03c.55 0 .99-.44.99-.98V2.98c0-.54-.44-.98-.98-.98h-.03c-.55 0-.99.44-.99.98v3.03c0 .55.44.99.98.99m4.92 2.11c.39.39 1.01.39 1.4 0 .62-.63 1.52-1.54 2.15-2.17.39-.38.39-1.01 0-1.39-.38-.38-1.01-.38-1.39 0L16.89 7.7c-.39.38-.39 1.01 0 1.39zM5.71 9.1c.38.39 1.01.39 1.4 0 .38-.38.38-1.01 0-1.39L4.96 5.54c-.38-.39-1.01-.39-1.39 0l-.02.01c-.39.39-.39 1.01 0 1.39.63.62 1.54 1.53 2.16 2.16m17.58 7.13c-6.41-5.66-16.07-5.66-22.48 0-.85.75-.85 2.08-.05 2.88l1.22 1.22c.72.72 1.86.78 2.66.15l2-1.59c.48-.38.76-.96.76-1.57v-2.6c3.02-.98 6.29-.99 9.32 0v2.61c0 .61.28 1.19.76 1.57l1.99 1.58c.8.63 1.94.57 2.66-.15l1.22-1.22c.79-.8.79-2.13-.06-2.88',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
