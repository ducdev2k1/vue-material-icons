import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OfficeOvpnIcon',
  props: {
    size: {
      type: [String, Number],
      default: 32,
    },
    color: String,
    viewBox: {
      type: String,
      default: '0 0 32 32',
    },
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        [
          {
            tag: 'path',
            props: {
              d: 'M16 2.66669C8.63669 2.66669 2.66669 8.63602 2.66669 16C2.66669 20.9287 5.34802 25.222 9.32469 27.53L12.3287 22.3414C10.1414 21.072 8.66669 18.7107 8.66669 16C8.66669 11.95 11.95 8.66669 16 8.66669C20.05 8.66669 23.3334 11.95 23.3334 16C23.3334 18.7107 21.8587 21.072 19.6714 22.3414L22.6754 27.53C26.652 25.222 29.3334 20.9287 29.3334 16C29.3334 8.63602 23.3634 2.66669 16 2.66669Z',
              fill: '#FF9100',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 16C20 13.7907 18.2087 12 16 12C13.7913 12 12 13.7907 12 16C12 17.704 13.0673 19.1553 14.568 19.7313L12.8613 28.946C13.87 29.19 14.9173 29.3333 16 29.3333C17.0827 29.3333 18.13 29.19 19.138 28.9467L17.4313 19.732C18.9327 19.1553 20 17.704 20 16Z',
              fill: '#1A237E',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
