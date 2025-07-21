import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsFIRIcon',
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
              fill: 'url(#pattern0_17_183)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_17_183',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_17_183',
              transform: 'scale(0.03125)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_17_183',
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
