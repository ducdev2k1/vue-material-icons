import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OfficeZipIcon',
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
            tag: 'path',
            props: {
              d: 'm15 8-1.268-1.268A2.5 2.5 0 0 0 11.964 6H3.5A1.5 1.5 0 0 0 2 7.5v17A1.5 1.5 0 0 0 3.5 26h25a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 28.5 8H15z',
              fill: '#FFB900',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm15 8-1.268 1.268a2.5 2.5 0 0 1-1.768.732H2v14.5A1.5 1.5 0 0 0 3.5 26h25a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 28.5 8H15z',
              fill: '#FFD75E',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm15 8-1.268 1.268a2.5 2.5 0 0 1-1.768.732H2v14.5A1.5 1.5 0 0 0 3.5 26h25a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 28.5 8H15z',
              fill: 'url(#a)',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M3 25.5c-.286 0-.55-.084-.777-.223.263.432.734.723 1.277.723h25c.543 0 1.014-.29 1.277-.723A1.488 1.488 0 0 1 29 25.5H3z',
              fill: '#BF5712',
            },
          },
          {
            tag: 'path',
            props: {
              opacity: '.4',
              d: 'M14.129 9.621 15.75 8H15l-1.268 1.268a2.5 2.5 0 0 1-1.768.732H2v.5h10.007a3 3 0 0 0 2.122-.879z',
              fill: '#fff',
            },
          },
          {
            tag: 'path',
            props: {
              rule: 'evenodd',
              d: 'M3.5 16h10a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5V20h.75a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25H3v-.5a.5.5 0 0 1 .5-.5zm12 4a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5zm2 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5zm1.5-.5a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-1 0v2zm2.5.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5zm1.5-.5a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-1 0v2zm2.5.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5zm1.5-.5a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-1 0v2zm2.5.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5zM13 19.75a.25.25 0 0 1-.25.25h-2.5a.25.25 0 0 1-.25-.25v-2.5a.25.25 0 0 1 .25-.25h2.5a.25.25 0 0 1 .25.25v2.5zM2 20h.75a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25H2v3z',
              fill: '#BF5712',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'linearGradient',
            props: {
              id: 'a',
              x1: '2',
              y1: '8',
              x2: '2',
              y2: '26',
              gradientUnits: 'userSpaceOnUse',
            },
          },
          {
            tag: 'stop',
            props: {
              color: '#fff',
              opacity: '.01',
            },
          },
          {
            tag: 'stop',
            props: {
              offset: '.999',
              color: '#FFD75E',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
