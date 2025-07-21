import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CpuPpcIcon',
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
              fill: 'url(#pattern0_26_294)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_26_294',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_26_294',
              transform: 'scale(0.0138889)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_26_294',
              width: '72',
              height: '72',
              preserveAspectRatio: 'none',
              href: 'data:image/jpeg;base64,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',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
