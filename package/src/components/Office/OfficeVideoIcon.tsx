import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'OfficeVideoIcon',
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
      'd': 'M4.5 28h23c.275 0 .5-.225.5-.5v-23c0-.275-.225-.5-.5-.5h-23c-.275 0-.5.225-.5.5v23c0 .275.225.5.5.5z',
      'fill': '#fff'
    }
  },
  {
    'tag': 'path',
    'props': {
      'opacity': '.67',
      'rule': 'evenodd',
      'd': 'M4.5 29h23c.827 0 1.5-.673 1.5-1.5v-23c0-.827-.673-1.5-1.5-1.5h-23C3.673 3 3 3.673 3 4.5v23c0 .827.673 1.5 1.5 1.5zM4 4.5a.5.5 0 0 1 .5-.5h23a.5.5 0 0 1 .5.5v23a.5.5 0 0 1-.5.5h-23a.5.5 0 0 1-.5-.5v-23z',
      'fill': '#605E5C'
    }
  },
  {
    'tag': 'path',
    'props': {
      'd': 'M21 16a.46.46 0 0 1-.24.39l-8 4.54a.48.48 0 0 1-.26.07.5.5 0 0 1-.24-.06.45.45 0 0 1-.26-.39V16h9z',
      'fill': '#BC1948'
    }
  },
  {
    'tag': 'path',
    'props': {
      'd': 'M21 16a.462.462 0 0 0-.24-.39l-8-4.546a.52.52 0 0 0-.5 0 .45.45 0 0 0-.26.39V16h9z',
      'fill': '#E8467C'
    }
  }
],
              props,
              attrs
            );
        },
      });