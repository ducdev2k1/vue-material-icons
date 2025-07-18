import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OfficeExeIcon',
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
              rule: 'evenodd',
              d: 'M28 11H4V7.5c0-.275.225-.5.5-.5h23c.275 0 .5.225.5.5V11zm-.5 14h-23a.501.501 0 0 1-.5-.5V12h24v12.5c0 .275-.225.5-.5.5z',
              fill: '#fff',
            },
          },
          {
            tag: 'path',
            props: {
              opacity: '.67',
              rule: 'evenodd',
              d: 'M27.5 6h-23C3.673 6 3 6.673 3 7.5v17c0 .827.673 1.5 1.5 1.5h23c.827 0 1.5-.673 1.5-1.5v-17c0-.827-.673-1.5-1.5-1.5zm-23 1h23c.275 0 .5.225.5.5V11H4V7.5c0-.275.225-.5.5-.5zm0 18h23c.275 0 .5-.225.5-.5V12H4v12.5c0 .276.224.5.5.5z',
              fill: '#605E5C',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M6 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
              fill: '#C8C6C4',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M12 25H4.5a.5.5 0 0 1-.5-.5V12h8v13z',
              fill: '#EDEBE9',
            },
          },
          {
            tag: 'path',
            props: {
              rule: 'evenodd',
              d: 'M9.5 15h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1zm0 2h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1zm-3 2h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1zM18.5 15h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1zm0 2h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1zm-4 2h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1zm4 2h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1zm-4 2h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1z',
              fill: '#C8C6C4',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M25 23h-3a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1z',
              fill: '#69AFE5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
