import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ArtTrackRoundedIcon',
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
              d: 'M21 13h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1m0-6h-6c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1m-6 10h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1m-3-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2m-2.1 5.2-1.26-1.68c-.2-.26-.59-.27-.8-.01L6.5 14.26l-.85-1.03c-.2-.25-.58-.24-.78.01l-.74.95c-.26.33-.02.81.39.81H9.5c.41 0 .65-.47.4-.8',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
