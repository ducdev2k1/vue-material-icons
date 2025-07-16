import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'BedTwoToneIcon',
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
      'd': 'M19 8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v2h6zm-8 0c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v2h6zm8 4H5c-.55 0-1 .45-1 1v2h16v-2c0-.55-.45-1-1-1',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });