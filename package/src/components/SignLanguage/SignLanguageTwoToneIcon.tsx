import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'SignLanguageTwoToneIcon',
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
      'd': 'M14 13.2V15h-2v7h4c.55 0 1-.45 1-1v-4.53c0-.27-.11-.54-.31-.73zM15.38 9l1.93-1.87 1.38 1.45L20 7.34v3.7c0 .28-.11.54-.31.73l-.7.66z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });