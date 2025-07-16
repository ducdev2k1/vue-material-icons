import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'SettingsVoiceTwoToneIcon',
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
      'd': 'M12 11c.56 0 .99-.44.99-1L13 4c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });