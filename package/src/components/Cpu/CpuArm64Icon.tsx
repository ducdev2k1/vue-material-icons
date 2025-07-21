import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CpuArm64Icon',
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
              fill: 'url(#pattern0_26_287)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_26_287',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_26_287',
              transform: 'scale(0.0138889)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_26_287',
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
