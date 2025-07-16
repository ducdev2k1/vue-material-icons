import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'MonitorWeightTwoToneIcon',
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
      'd': 'M13 8.5h1v1h-1zm-3 0h1v1h-1zm1.5 0h1v1h-1z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });