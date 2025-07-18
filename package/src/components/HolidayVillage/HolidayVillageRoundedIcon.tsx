import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HolidayVillageRoundedIcon',
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
              d: 'M17 20c.55 0 1-.45 1-1V8.76c0-.27-.11-.52-.29-.71l-3.76-3.76c-.19-.18-.44-.29-.71-.29-.89 0-1.34 1.08-.71 1.71l3.32 3.32c.1.09.15.22.15.35V19c0 .55.45 1 1 1m4 0c.55 0 1-.45 1-1V7.11c0-.26-.11-.52-.29-.71l-2.1-2.11c-.19-.18-.45-.29-.71-.29-.9 0-1.34 1.08-.71 1.71l1.67 1.67c.09.09.14.22.14.35V19c0 .55.45 1 1 1M8 15c.55 0 1 .45 1 1v4h4c.55 0 1-.45 1-1v-8.59c0-.27-.11-.52-.29-.71l-5-5a.996.996 0 0 0-1.41 0l-5 5c-.19.19-.3.45-.3.71V19c0 .55.45 1 1 1h4v-4c0-.55.45-1 1-1m0-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
