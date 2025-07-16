import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'AssignmentLateTwoToneIcon',
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
      'd': 'M5 5v14h14V5zm8 12h-2v-2h2zm0-4h-2V7h2z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });