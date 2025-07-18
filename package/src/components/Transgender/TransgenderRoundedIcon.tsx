import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TransgenderRoundedIcon',
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
              d: 'M21.5 1h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.58l-3.97 3.97C14.23 6.36 13.16 6 12 6s-2.23.36-3.11.97l-.65-.65.7-.7c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0l-.7.7L4.92 3H6.5c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V4.42l1.91 1.9-.71.71c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l.71-.71.65.65c-.61.89-.97 1.96-.97 3.12 0 2.7 1.94 4.94 4.5 5.41V19h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2.09c2.56-.47 4.5-2.71 4.5-5.41 0-1.16-.36-2.23-.97-3.12l3.97-3.96V6c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1M12 15c-1.93 0-3.5-1.57-3.5-3.5S10.07 8 12 8s3.5 1.57 3.5 3.5S13.93 15 12 15',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
