import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OsGTVIcon',
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
              fill: 'url(#pattern0_17_187)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_17_187',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_17_187',
              transform: 'scale(0.03125)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_17_187',
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
