import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SpaRoundedIcon',
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
            tag: 'path',
            props: {
              d: 'M15.49 9.63c-.16-2.42-1.03-4.79-2.64-6.76-.41-.5-1.16-.5-1.57 0-1.65 1.98-2.57 4.35-2.77 6.76 1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63m-6.5 2.65c-.14-.1-.3-.19-.45-.29.15.11.31.19.45.29m6.42-.25c-.13.09-.27.16-.4.26.13-.1.27-.17.4-.26M12 15.45c-1.95-2.97-5.14-5.03-8.83-5.39-.64-.06-1.17.47-1.11 1.11.45 4.8 3.65 8.78 7.98 10.33.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51 4.33-1.55 7.53-5.52 7.98-10.33.06-.64-.48-1.17-1.11-1.11-3.71.36-6.9 2.42-8.85 5.39',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
