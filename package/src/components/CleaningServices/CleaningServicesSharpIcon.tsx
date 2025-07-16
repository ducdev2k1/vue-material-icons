import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'CleaningServicesSharpIcon',
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
      'd': 'M15 11V1H9v10H3v12h18V11zm4 10h-2v-4h-2v4h-2v-4h-2v4H9v-4H7v4H5v-8h14z'
    }
  }
],
              props,
              attrs
            );
        },
      });