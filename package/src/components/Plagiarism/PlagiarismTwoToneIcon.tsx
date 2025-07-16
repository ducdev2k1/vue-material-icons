import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'PlagiarismTwoToneIcon',
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
      'd': 'M13 4H6v16h12V9h-5zm.97 7.03c1.12 1.12 1.31 2.8.59 4.13l1.88 1.88-1.41 1.41-1.88-1.88c-1.33.71-3.01.53-4.13-.59-1.37-1.37-1.37-3.58 0-4.95s3.59-1.37 4.95 0',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });