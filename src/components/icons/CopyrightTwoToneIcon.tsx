import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CopyrightTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8m-1.92 9.14c.05.33.16.63.3.88s.34.46.59.62c.23.15.53.22.89.23.21-.01.41-.03.6-.1.2-.07.37-.17.52-.3s.27-.28.36-.46.14-.37.15-.58h1.79c-.01.41-.12.79-.3 1.15s-.43.67-.74.94q-.465.405-1.08.63c-.41.15-.85.23-1.32.23-.65 0-1.22-.12-1.7-.34s-.88-.53-1.2-.91-.56-.83-.71-1.35S8 12.72 8 12.14v-.27c0-.58.09-1.12.24-1.64s.39-.97.71-1.36.72-.69 1.2-.92 1.05-.34 1.7-.34c.51 0 .97.07 1.39.23q.63.24 1.08.66c.3.28.53.62.7 1.01s.26.82.28 1.29h-1.79c-.01-.22-.05-.44-.14-.64s-.2-.38-.34-.53-.32-.27-.52-.36c-.19-.08-.4-.12-.63-.13-.37.01-.67.08-.91.23-.25.16-.45.37-.59.62s-.25.54-.3.87-.08.66-.08 1.01v.27c0 .33.03.67.08 1',
        props,
        attrs
      );
  },
});