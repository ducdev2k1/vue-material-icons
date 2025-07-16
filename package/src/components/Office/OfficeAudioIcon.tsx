import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'OfficeAudioIcon',
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
      'rule': 'evenodd',
      'd': 'M13 20.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM19 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z',
      'stroke': '#E8467C',
      'linecap': 'round',
      'linejoin': 'round'
    }
  },
  {
    'tag': 'path',
    'props': {
      'd': 'M20.5 11.5h.5a.5.5 0 0 0-.582-.493l.082.493zm-6 1-.082-.493A.5.5 0 0 0 14 12.5h.5zM21 18v-6.5h-1V18h1zm-.582-6.993-6 1 .164.986 6-1-.164-.986zM14 12.5V19h1v-6.5h-1zm6.418.507-6 1 .164.986 6-1-.164-.986z',
      'fill': '#E8467C'
    }
  }
],
              props,
              attrs
            );
        },
      });