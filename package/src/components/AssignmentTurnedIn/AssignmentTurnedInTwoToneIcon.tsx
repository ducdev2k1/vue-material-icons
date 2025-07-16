import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'AssignmentTurnedInTwoToneIcon',
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
      'd': 'M5 19h14V5H5zm2.41-7.41L10 14.17l6.59-6.59L18 9l-8 8-4-4z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });