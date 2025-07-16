import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'LocalHospitalTwoToneIcon',
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
      'd': 'M5 19h14V5H5zm2-8.5h3.5V7h3v3.5H17v3h-3.5V17h-3v-3.5H7z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });