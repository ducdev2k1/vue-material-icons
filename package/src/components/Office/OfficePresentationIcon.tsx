import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'OfficePresentationIcon',
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
    'tag': 'path',
    'props': {
      'd': 'M4.5 25h23a.5.5 0 0 0 .5-.5V13h-4.5c-.827 0-1.5-.673-1.5-1.5V7H4.5a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5z',
      'fill': '#fff'
    }
  },
  {
    'tag': 'path',
    'props': {
      'd': 'M27.293 12 23 7.707V11.5a.5.5 0 0 0 .5.5h3.793z',
      'fill': '#fff'
    }
  },
  {
    'tag': 'path',
    'props': {
      'opacity': '.67',
      'rule': 'evenodd',
      'd': 'm28.56 11.854-5.414-5.415A1.51 1.51 0 0 0 22.086 6H4.5C3.673 6 3 6.673 3 7.5v17c0 .827.673 1.5 1.5 1.5h23c.827 0 1.5-.673 1.5-1.5V12.914c0-.4-.156-.777-.44-1.06zM23 7.707 27.293 12H23.5a.5.5 0 0 1-.5-.5V7.707zM4.5 25h23a.5.5 0 0 0 .5-.5V13h-4.5c-.827 0-1.5-.673-1.5-1.5V7H4.5a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5z',
      'fill': '#605E5C'
    }
  },
  {
    'tag': 'path',
    'props': {
      'rule': 'evenodd',
      'd': 'M6.5 13h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1zm0 2h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1zm4 2h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1zm-4 2h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1zm4 2h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1zm-4 2h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1z',
      'fill': '#C8C6C4'
    }
  },
  {
    'tag': 'path',
    'props': {
      'd': 'M18 13a4 4 0 0 1 4 4h-4v-4z',
      'fill': '#B7472A'
    }
  },
  {
    'tag': 'path',
    'props': {
      'd': 'M22 18a5.006 5.006 0 0 1-6.082 4.886 4.973 4.973 0 0 1-3.804-3.804A5.006 5.006 0 0 1 17 13v5h5z',
      'fill': '#C8C6C4'
    }
  }
],
              props,
              attrs
            );
        },
      });