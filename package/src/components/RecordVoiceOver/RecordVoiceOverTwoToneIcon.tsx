import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RecordVoiceOverTwoToneIcon',
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
            tag: 'circle',
            props: {
              cx: '9',
              cy: '9',
              r: '2',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M9 17c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
