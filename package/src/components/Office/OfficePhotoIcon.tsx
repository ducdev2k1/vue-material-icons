import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OfficePhotoIcon',
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
              d: 'M4.5 28h23c.275 0 .5-.225.5-.5v-23c0-.275-.225-.5-.5-.5h-23c-.275 0-.5.225-.5.5v23c0 .275.225.5.5.5z',
              fill: '#fff',
            },
          },
          {
            tag: 'path',
            props: {
              rule: 'evenodd',
              d: 'M18.94 17.358 17.224 19.8l-2.908-3.903a1 1 0 0 0-1.604 0L8.191 21.97c-.476.637-.008 1.53.801 1.53h14.016c.796 0 1.267-.868.818-1.508l-3.25-4.634a1 1 0 0 0-1.637 0z',
              stroke: '#A6CCC3',
            },
          },
          {
            tag: 'path',
            props: {
              rule: 'evenodd',
              d: 'M21.5 12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
              stroke: '#FF9810',
            },
          },
          {
            tag: 'path',
            props: {
              opacity: '.67',
              rule: 'evenodd',
              d: 'M4.5 29h23c.827 0 1.5-.673 1.5-1.5v-23c0-.827-.673-1.5-1.5-1.5h-23C3.673 3 3 3.673 3 4.5v23c0 .827.673 1.5 1.5 1.5zM4 4.5a.5.5 0 0 1 .5-.5h23a.5.5 0 0 1 .5.5v23a.5.5 0 0 1-.5.5h-23a.5.5 0 0 1-.5-.5v-23z',
              fill: '#605E5C',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
