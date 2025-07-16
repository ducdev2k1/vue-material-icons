import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'SubscriptionsSharpIcon',
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
      'd': 'M20 8H4V6h16zm-2-6H6v2h12zm4 8v12H2V10zm-6 6-6-3.27v6.53z'
    }
  }
],
              props,
              attrs
            );
        },
      });