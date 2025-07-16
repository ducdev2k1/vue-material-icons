import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OfficeOneIcon',
  props: {
    size: {
      type: [String, Number],
      default: 32,
    },
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
              opacity: '.67',
              rule: 'evenodd',
              d: 'M9.5 30h17c.827 0 1.5-.673 1.5-1.5v-25c0-.827-.673-1.5-1.5-1.5h-17C8.673 2 8 2.673 8 3.5v25c0 .827.673 1.5 1.5 1.5zM9 3.5a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5v25a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5v-25z',
              fill: '#605E5C',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M29 19h-1v-6h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z',
              fill: '#9332BF',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M29 12h-1V6h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z',
              fill: '#AE4BD5',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M29 26h-1v-6h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z',
              fill: '#7719AA',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M9.5 29h17a.5.5 0 0 0 .5-.5v-25a.5.5 0 0 0-.5-.5h-17a.5.5 0 0 0-.5.5v25a.5.5 0 0 0 .5.5z',
              fill: '#fff',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M3.5 25h11a1.5 1.5 0 0 0 1.5-1.5v-11a1.5 1.5 0 0 0-1.5-1.5h-11A1.5 1.5 0 0 0 2 12.5v11A1.5 1.5 0 0 0 3.5 25z',
              fill: '#7719AA',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M12.541 22h-1.816S7.074 16.464 7 16.316V22H5.312v-8h2.06l3.662 5.684c-.03-.191-.013-5.672-.013-5.672l1.52-.012v8z',
              fill: '#fff',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
