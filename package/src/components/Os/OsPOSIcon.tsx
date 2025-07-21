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
              fill: 'url(#pattern0_17_210)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_17_210',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_17_210',
              transform: 'scale(0.03125)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_17_210',
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
