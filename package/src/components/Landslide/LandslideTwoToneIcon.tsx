import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'LandslideTwoToneIcon',
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
    'tag': 'path',
    'props': {
      'd': 'M8.57 12.09 7 10H4v2.28l2 .67zm3.96 2.68-2.58-1.03L6 15.05l-2-.66v1.89l2 .67zM15 4.65V2.64l-2.58-.52-1.42.95v1.86l1.23.82zm-9 14.4-2-.66V20h14l-2.97-3.96zm12-9.09v1.08l.8.64 2.2-.98V9.6l-2-.44z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });