import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'NotificationImportantTwoToneIcon',
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
      'd': 'M12 6c-2.76 0-5 2.24-5 5v7h10v-7c0-2.76-2.24-5-5-5m1 10h-2v-2h2zm0-4h-2V8h2z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });