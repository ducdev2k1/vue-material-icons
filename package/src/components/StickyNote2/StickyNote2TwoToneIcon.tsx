import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'StickyNote2TwoToneIcon',
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
      'd': 'M5 5v14h9v-5h5V5zm7 9H7v-2h5zm5-4H7V8h10z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });