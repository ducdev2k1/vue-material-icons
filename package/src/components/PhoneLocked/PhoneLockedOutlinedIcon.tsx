import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'PhoneLockedOutlinedIcon',
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
      'd': 'M20 5V4c0-1.1-.9-2-2-2s-2 .9-2 2v1h-1v5h6V5zm-1 0h-2V4c0-.55.45-1 1-1s1 .45 1 1z'
    }
  }
],
              props,
              attrs
            );
        },
      });