import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WebAssetOffRoundedIcon',
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
              d: 'M6.83 4H20c1.11 0 2 .9 2 2v12c0 .34-.09.66-.23.94L20 17.17V8h-9.17zm12.95 18.61L17.17 20H4c-1.11 0-2-.9-2-2V6c0-.34.08-.66.23-.94l-.84-.84a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l18.38 18.38c.39.39.39 1.02 0 1.41-.38.4-1.01.4-1.4.01M15.17 18l-10-10H4v10z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
