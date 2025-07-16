import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'OnDeviceTrainingRoundedIcon',
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
      'd': 'M11.5 17h1c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5s.22.5.5.5m.02-5.94c-.71.16-1.29.74-1.46 1.44-.23.94.21 1.8.94 2.22v.53c0 .14.11.25.25.25h1.5c.14 0 .25-.11.25-.25v-.53c.6-.35 1-.98 1-1.72 0-1.26-1.17-2.25-2.48-1.94'
    }
  }
],
              props,
              attrs
            );
        },
      });