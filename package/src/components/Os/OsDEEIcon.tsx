import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsDEEIcon',
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
            tag: 'rect',
            props: {
              width: '24',
              height: '24',
              fill: 'url(#pattern0_17_180)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_17_180',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_17_180',
              transform: 'scale(0.03125)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_17_180',
              width: '32',
              height: '32',
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
