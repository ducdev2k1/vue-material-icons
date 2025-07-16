import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'DoorSlidingSharpIcon',
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
      'd': 'M20 19V3h-7.25v16h-1.5V3H4v16H3v2h18v-2zm-10-6H8v-2h2zm6 0h-2v-2h2z'
    }
  }
],
              props,
              attrs
            );
        },
      });