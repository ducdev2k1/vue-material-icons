import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'VaccinesTwoToneIcon',
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
      'd': 'M19 17h-4v-1.5h4zM9 7.5H5V15h4v-1.5H7.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H9v-1.5H7.25c-.41 0-.75-.34-.75-.75S6.84 9 7.25 9H9z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });