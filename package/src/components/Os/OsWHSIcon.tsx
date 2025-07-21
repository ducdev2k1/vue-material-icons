import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsWHSIcon',
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
              fill: 'url(#pattern0_17_239)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_17_239',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_17_239',
              transform: 'scale(0.03125)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_17_239',
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
