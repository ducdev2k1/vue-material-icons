import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'PersonPinTwoToneIcon',
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
      'd': 'm9.83 18 .59.59L12 20.17l1.59-1.59.58-.58H19V4H5v14zM12 5c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M6 15.58C6 13.08 9.97 12 12 12s6 1.08 6 3.58V17H6z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });