import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'SettingsRemoteTwoToneIcon',
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
      'd': 'M10 21h4V11h-4zm2-9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });