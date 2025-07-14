import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NearMeOutlinedIcon',
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
              d: 'm17.27 6.73-4.24 10.13-1.32-3.42-.32-.83-.82-.32-3.43-1.33zM21 3 3 10.53v.98l6.84 2.65L12.48 21h.98z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
