import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PublishedWithChangesRoundedIcon',
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
              d: 'm16.95 10.23-5.66 5.66c-.39.39-1.02.39-1.41 0l-2.83-2.83a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l2.12 2.12 4.95-4.95c.39-.39 1.02-.39 1.41 0 .4.39.4 1.02.01 1.41M4 12c0-2.33 1.02-4.42 2.62-5.88l1.53 1.53c.31.31.85.09.85-.36V3c0-.28-.22-.5-.5-.5H4.21c-.45 0-.67.54-.35.85L5.2 4.7C3.24 6.52 2 9.11 2 12c0 4.75 3.32 8.73 7.76 9.75.63.14 1.24-.33 1.24-.98 0-.47-.33-.87-.79-.98C6.66 18.98 4 15.8 4 12m18 0c0-4.75-3.32-8.73-7.76-9.75-.63-.14-1.24.33-1.24.98 0 .47.33.87.79.98C17.34 5.02 20 8.2 20 12c0 2.33-1.02 4.42-2.62 5.88l-1.53-1.53c-.31-.31-.85-.09-.85.36V21c0 .28.22.5.5.5h4.29c.45 0 .67-.54.35-.85L18.8 19.3c1.96-1.82 3.2-4.41 3.2-7.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
