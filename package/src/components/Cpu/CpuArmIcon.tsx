import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CpuArmIcon',
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
              fill: 'url(#pattern0_26_286)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_26_286',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_26_286',
              transform: 'scale(0.0138889)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_26_286',
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
