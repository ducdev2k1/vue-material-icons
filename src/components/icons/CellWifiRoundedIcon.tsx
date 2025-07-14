import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CellWifiRoundedIcon',
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
              d: 'M20.29 7.68 7.7 20.29c-.63.63-.18 1.71.71 1.71H21c.55 0 1-.45 1-1V8.39c0-.89-1.08-1.34-1.71-.71M20 20h-2v-7.22l2-2zM9.61 10.68c-.28.17-.32.56-.09.79l.82.82c.39.39 1.02.39 1.41 0l.82-.82c.23-.23.18-.62-.09-.79-.87-.54-1.99-.54-2.87 0M8.42 9.3c1.57-1.12 3.7-1.12 5.27 0 .36.26.85.22 1.16-.1.39-.39.35-1.06-.1-1.38-2.2-1.57-5.19-1.57-7.4 0-.45.32-.5.99-.1 1.38.32.32.81.36 1.17.1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
