import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'DriveFileMoveRtlTwoToneIcon',
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
      'd': 'm11.17 8-2-2H4v12h16V8zM16 14h-4v3l-4-4 4-4v3h4z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });