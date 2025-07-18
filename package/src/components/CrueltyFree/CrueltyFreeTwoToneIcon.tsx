import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CrueltyFreeTwoToneIcon',
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
              d: 'M16.88 4.03c.06.17.12.48.12.97 0 2.84-1.11 5.24-2.07 6.78-.38-.26-.83-.48-1.4-.62.24-4.52 2.44-6.83 3.35-7.13M7 5c0-.49.06-.8.12-.97.91.3 3.11 2.61 3.36 7.13-.58.14-1.03.35-1.4.62C8.11 10.24 7 7.84 7 5m9 10.77c-.44-.36-.61-.52-1.3-1.37-.76-.95-1.09-1.4-2.7-1.4s-1.94.45-2.7 1.4c-.69.85-.86 1.01-1.3 1.37-.57.49-1 1.03-1 1.73C7 18.88 8.12 20 9.5 20c1 0 1.8-.33 2.22-.56-.42-.18-.72-.71-.72-.94 0-.28.45-.5 1-.5s1 .22 1 .5c0 .23-.3.76-.72.94.42.23 1.22.56 2.22.56 1.38 0 2.5-1.12 2.5-2.5 0-.7-.43-1.24-1-1.73m-5.5.98c-.28 0-.5-.34-.5-.75s.22-.75.5-.75.5.34.5.75-.22.75-.5.75m3 0c-.28 0-.5-.34-.5-.75s.22-.75.5-.75.5.34.5.75-.22.75-.5.75',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
