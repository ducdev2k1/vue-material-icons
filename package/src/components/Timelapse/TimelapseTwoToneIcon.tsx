import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'TimelapseTwoToneIcon',
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
      'd': 'M12 3.99c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8m4.25 12.24c-2.35 2.34-6.15 2.34-8.49 0L12 11.99v-6c1.54 0 3.07.59 4.24 1.76 2.35 2.34 2.35 6.14.01 8.48',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });