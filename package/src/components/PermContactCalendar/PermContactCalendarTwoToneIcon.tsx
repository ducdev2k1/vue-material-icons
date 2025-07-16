import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'PermContactCalendarTwoToneIcon',
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
      'd': 'M16 5H5v14h14V5zm-4 1c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m6 12H6v-1.53c0-2.5 3.97-3.58 6-3.58s6 1.08 6 3.58z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });