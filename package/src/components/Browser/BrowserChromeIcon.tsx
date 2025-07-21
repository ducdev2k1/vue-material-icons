import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BrowserChromeIcon',
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
              path: 'url(#clip0_13_7)',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M12 17.5652C15.0736 17.5652 17.5652 15.0736 17.5652 12C17.5652 8.92639 15.0736 6.43475 12 6.43475C8.92639 6.43475 6.43475 8.92639 6.43475 12C6.43475 15.0736 8.92639 17.5652 12 17.5652Z',
              fill: 'white',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M9.21739 16.8174C8.37172 16.3302 7.66977 15.6283 7.18261 14.7826L2.36522 6.43475C1.38851 8.12647 0.874219 10.0454 0.874023 11.9989C0.873828 13.9523 1.38773 15.8714 2.3641 17.5633C3.34048 19.2552 4.74493 20.6603 6.43635 21.6375C8.12777 22.6148 10.0466 23.1296 12 23.1304L16.8174 14.7826C16.079 16.0598 14.8637 16.9917 13.4386 17.3732C12.0135 17.7548 10.4952 17.5548 9.21739 16.8174Z',
              fill: 'url(#paint0_linear_13_7)',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M17.5652 12C17.5658 12.9772 17.3078 13.9373 16.8174 14.7826L12 23.1304C13.9542 23.1312 15.8741 22.6174 17.5667 21.6408C19.2594 20.6642 20.665 19.2592 21.6424 17.567C22.6198 15.8749 23.1345 13.9552 23.1347 12.001C23.1349 10.0469 22.6206 8.1271 21.6435 6.43475H11.9913C13.4673 6.43475 14.8829 7.02109 15.9265 8.06477C16.9702 9.10845 17.5565 10.524 17.5565 12H17.5652Z',
              fill: 'url(#paint1_linear_13_7)',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M12 16.5217C14.4973 16.5217 16.5217 14.4973 16.5217 12C16.5217 9.50272 14.4973 7.47827 12 7.47827C9.50272 7.47827 7.47827 9.50272 7.47827 12C7.47827 14.4973 9.50272 16.5217 12 16.5217Z',
              fill: '#1A73E8',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M9.21738 7.18261C10.0627 6.69223 11.0227 6.43422 12 6.43478H21.6348C20.6579 4.74279 19.2528 3.33776 17.5608 2.36089C15.8687 1.38403 13.9494 0.869751 11.9956 0.869751C10.0419 0.869751 8.12253 1.38403 6.43051 2.36089C4.7385 3.33776 3.33342 4.74279 2.35651 6.43478L7.18259 14.7826C6.44512 13.5048 6.24519 11.9865 6.62674 10.5614C7.0083 9.13627 7.94012 7.92096 9.21738 7.18261Z',
              fill: 'url(#paint2_linear_13_7)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'linearGradient',
            props: {
              id: 'paint0_linear_13_7',
              x1: '13.4783',
              y1: '22.8695',
              x2: '3.82609',
              y2: '6.17388',
              gradientUnits: 'userSpaceOnUse',
            },
          },
          {
            tag: 'stop',
            props: {
              color: '#1E8E3E',
            },
          },
          {
            tag: 'stop',
            props: {
              offset: '1',
              color: '#34A853',
            },
          },
          {
            tag: 'linearGradient',
            props: {
              id: 'paint1_linear_13_7',
              x1: '10.5218',
              y1: '22.9565',
              x2: '20.1739',
              y2: '6.26084',
              gradientUnits: 'userSpaceOnUse',
            },
          },
          {
            tag: 'stop',
            props: {
              color: '#FCC934',
            },
          },
          {
            tag: 'stop',
            props: {
              offset: '1',
              color: '#FBBC04',
            },
          },
          {
            tag: 'linearGradient',
            props: {
              id: 'paint2_linear_13_7',
              x1: '2.34781',
              y1: '7.82608',
              x2: '21.6522',
              y2: '7.82608',
              gradientUnits: 'userSpaceOnUse',
            },
          },
          {
            tag: 'stop',
            props: {
              color: '#D93025',
            },
          },
          {
            tag: 'stop',
            props: {
              offset: '1',
              color: '#EA4335',
            },
          },
          {
            tag: 'clipPath',
            props: {
              id: 'clip0_13_7',
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
