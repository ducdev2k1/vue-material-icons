import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsOWRIcon',
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
            tag: 'rect',
            props: {
              width: '24',
              height: '24',
              fill: 'url(#pattern0_28_44)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_28_44',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_28_44',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_28_44',
              width: '24',
              height: '24',
              preserveAspectRatio: 'none',
              href: 'data:image/png;base64,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',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
