import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ControlCameraRoundedIcon',
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
              d: 'M4.65 9.35 2.7 11.3c-.39.39-.39 1.02 0 1.41l1.95 1.95c.49.49 1.28.49 1.77 0 .48-.49.48-1.27 0-1.76l-.88-.9.88-.89c.48-.49.48-1.27 0-1.76s-1.28-.49-1.77 0m12.93 0c-.48.49-.48 1.27 0 1.76l.88.89-.88.89c-.48.49-.48 1.27 0 1.76.49.49 1.28.49 1.77 0l1.95-1.95c.39-.39.39-1.02 0-1.41l-1.95-1.95c-.49-.48-1.29-.48-1.77.01M12 18.46l-.89-.88c-.49-.48-1.27-.48-1.76 0-.49.49-.49 1.28 0 1.77l1.95 1.95c.39.39 1.02.39 1.41 0l1.95-1.95c.49-.49.49-1.28 0-1.77-.49-.48-1.27-.48-1.76 0zM9.35 6.42c.49.48 1.27.48 1.76 0l.89-.88.89.88c.49.48 1.27.48 1.76 0 .49-.49.49-1.28 0-1.77L12.7 2.7a.996.996 0 0 0-1.41 0L9.35 4.65c-.49.49-.49 1.29 0 1.77',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
