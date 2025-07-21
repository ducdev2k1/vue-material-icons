import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CpuIrixIcon',
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
              fill: 'url(#pattern0_26_290)',
            },
          },
          {
            tag: 'defs',
            props: {},
          },
          {
            tag: 'pattern',
            props: {
              id: 'pattern0_26_290',
              patternContentUnits: 'objectBoundingBox',
              width: '1',
              height: '1',
            },
          },
          {
            tag: 'use',
            props: {
              href: '#image0_26_290',
              transform: 'scale(0.0138889)',
            },
          },
          {
            tag: 'image',
            props: {
              id: 'image0_26_290',
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
