import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsPOSIcon',
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
              fill: 'url(#pattern0_28_46)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_28_46',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_28_46',
              transform: 'scale(0.0416667)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_28_46',
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
