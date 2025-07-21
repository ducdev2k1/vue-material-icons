import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BrowserYandexIcon',
  props: {
    size: {
      type: [String, Number],
      default: 32,
    },
    color: String,
    viewBox: {
      type: String,
      default: '0 0 32 32',
    },
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        [
          {
            tag: 'g',
            props: {
              path: 'url(#clip0_14_148)',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M12.41 22.82C18.1593 22.82 22.82 18.1593 22.82 12.41C22.82 6.66072 18.1593 2 12.41 2C6.66072 2 2 6.66072 2 12.41C2 18.1593 6.66072 22.82 12.41 22.82Z',
              fill: 'white',
              stroke: 'url(#paint0_linear_14_148)',
              width: '2.32688',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M7.79133 7L6 8.75708L11.2363 13.8937V20H13.77V13.8871L19 8.75708L17.2087 7L12.4998 11.6189L7.79133 7Z',
              fill: '#FF0000',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'linearGradient',
            props: {
              id: 'paint0_linear_14_148',
              x1: '-753.135',
              y1: '-346.822',
              x2: '-753.135',
              y2: '-383.754',
              gradientUnits: 'userSpaceOnUse',
            },
          },
          {
            tag: 'stop',
            props: {
              color: '#D3D3D3',
            },
          },
          {
            tag: 'stop',
            props: {
              offset: '1',
              color: '#FCF9F9',
            },
          },
          {
            tag: 'clipPath',
            props: {
              id: 'clip0_14_148',
            },
          },
          {
            tag: 'rect',
            props: {
              width: '24',
              height: '24',
              fill: 'white',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
